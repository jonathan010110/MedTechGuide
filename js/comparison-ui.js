/**
 * =====================================================
 * COMPARISON UI MODULE
 * Handling DOM interactions for the comparison page
 * =====================================================
 */

class ComparisonUI {
    constructor() {
        this.deviceGrid = document.getElementById('deviceGrid');
        this.categoryFilter = document.getElementById('categoryFilter');

        // Check if we are on the comparison page
        if (!this.deviceGrid || !this.categoryFilter) return;

        this.currentCategory = 'all';
        this.selectedDevices = [];

        this.init();
    }

    init() {
        this.renderCategoryFilters();
        this.renderDevices();
        this.attachFilterEvents();
        this.attachDeviceSelectionEvents();
    }

    /**
     * Render category filter buttons based on database
     */
    renderCategoryFilters() {
        const categories = MedicalDevicesDatabase.getCategories();

        // Add dynamic category buttons next to "all"
        categories.forEach(category => {
            const btn = document.createElement('button');
            btn.className = 'filter-btn';
            btn.dataset.category = category;
            btn.textContent = category;
            this.categoryFilter.appendChild(btn);
        });
    }

    /**
     * Render devices into the grid
     */
    renderDevices() {
        this.deviceGrid.innerHTML = '';

        let devicesToRender = MedicalDevicesDatabase.devices;

        if (this.currentCategory !== 'all') {
            devicesToRender = MedicalDevicesDatabase.getDevicesByCategory(this.currentCategory);
        }

        if (devicesToRender.length === 0) {
            this.deviceGrid.innerHTML = '<p class="no-results">Keine Geräte in dieser Kategorie gefunden.</p>';
            return;
        }

        devicesToRender.forEach(device => {
            const isSelected = this.selectedDevices.includes(device.id);

            const card = document.createElement('div');
            card.className = `device-card device-card-select ${isSelected ? 'selected' : ''}`;
            card.dataset.deviceId = device.id;

            card.innerHTML = `
        <div class="card-header" style="display: flex; justify-content: space-between; align-items: center; margin-bottom: 1rem;">
          <div>
            <span class="device-icon" style="font-size: 2rem; margin-right: 0.5rem;">${device.icon}</span>
            <span class="device-category" style="background: var(--bg-light); padding: 0.25rem 0.5rem; border-radius: 4px; font-size: 0.8rem; color: var(--accent); font-weight: 600;">${this.categoryShortener(device.category)}</span>
          </div>
          <input type="checkbox" class="card-checkbox" ${isSelected ? 'checked' : ''} aria-label="Auswählen für Vergleich">
        </div>
        <h3 style="margin: 0 0 0.5rem 0; font-size: 1.1rem; color: var(--primary);">${device.name}</h3>
        <p style="margin: 0; color: var(--text-secondary); font-size: 0.9rem; line-height: 1.4;">${device.description.substring(0, 80)}...</p>
      `;

            this.deviceGrid.appendChild(card);
        });
    }

    // Helper for shorter category names in badge
    categoryShortener(category) {
        if (category === "Zahnmedizin") return "Zahn";
        return category;
    }

    /**
     * Filter Event Listeners
     */
    attachFilterEvents() {
        this.categoryFilter.addEventListener('click', (e) => {
            if (e.target.tagName !== 'BUTTON') return;

            // Update active state
            this.categoryFilter.querySelectorAll('.filter-btn').forEach(btn => {
                btn.classList.remove('active');
            });
            e.target.classList.add('active');

            // Update category and re-render
            this.currentCategory = e.target.dataset.category;
            this.renderDevices();
        });
    }

    /**
     * Device Selection Listeners
     */
    attachDeviceSelectionEvents() {
        this.deviceGrid.addEventListener('click', (e) => {
            const card = e.target.closest('.device-card-select');
            if (!card) return;

            const deviceId = card.dataset.deviceId;

            // Prevent double toggle if they clicked the checkbox directly
            if (e.target.type !== 'checkbox') {
                const checkbox = card.querySelector('.card-checkbox');
                checkbox.checked = !checkbox.checked;
            }

            this.handleSelectionToggle(deviceId, card);
        });
    }

    /**
     * Logic for selecting/deselecting
     */
    handleSelectionToggle(deviceId, cardElement) {
        const isSelected = this.selectedDevices.includes(deviceId);
        const checkbox = cardElement.querySelector('.card-checkbox');

        if (isSelected) {
            // Deselect
            this.selectedDevices = this.selectedDevices.filter(id => id !== deviceId);
            cardElement.classList.remove('selected');
            if (checkbox) checkbox.checked = false;

            // Tell ComparisonModule
            if (window.comparisonModuleInstance) {
                window.comparisonModuleInstance.removeDevice(deviceId);
            }

        } else {
            // Select (Max 2)
            if (this.selectedDevices.length >= 2) {
                alert('Sie können maximal 2 Geräte für den Vergleich auswählen.');
                if (checkbox) checkbox.checked = false;
                return;
            }

            this.selectedDevices.push(deviceId);
            cardElement.classList.add('selected');
            if (checkbox) checkbox.checked = true;

            // Tell ComparisonModule
            if (window.comparisonModuleInstance) {
                window.comparisonModuleInstance.selectDevice(deviceId);
            }
        }

        this.updateSelectionStatus();
    }

    /**
     * Update Status Bar
     */
    updateSelectionStatus() {
        const statusText = document.getElementById('selectionStatus');
        const compareBtn = document.getElementById('compareBtn');

        const count = this.selectedDevices.length;

        if (statusText) {
            if (count === 0) {
                statusText.textContent = 'Wählen Sie 2 Geräte für den Vergleich aus';
                statusText.style.color = '#6b7280';
            } else if (count === 1) {
                const dev = MedicalDevicesDatabase.getDeviceById(this.selectedDevices[0]);
                statusText.textContent = `${dev.name} ausgewählt. Wählen Sie 1 weiteres Gerät.`;
                statusText.style.color = '#d97706';
            } else if (count === 2) {
                statusText.textContent = '2 Geräte ausgewählt. Bereit für den Vergleich!';
                statusText.style.color = '#16a34a';
            }
        }

        if (compareBtn) {
            compareBtn.textContent = `Vergleichen (${count}/2)`;
            compareBtn.disabled = count < 2;
        }
    }
}

// Init when DOM Ready
document.addEventListener('DOMContentLoaded', () => {
    new ComparisonUI();
});
