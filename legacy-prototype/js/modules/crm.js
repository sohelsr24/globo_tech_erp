/**
 * Leads & CRM Pipeline Module
 * Visual Kanban board: New -> Contacted -> Proposal -> Won -> Lost
 * 1-Click: Convert Won Lead to Customer & Quotation.
 */

import { store } from '../store.js';
import { Formatters } from '../utils/formatters.js';

export const CrmModule = {
  render() {
    const settings = store.getSettings();
    const currency = settings.currency || '৳';
    const leads = store.getLeads();

    const stages = [
      { id: 'new', title: 'New Leads', color: 'var(--cyan)' },
      { id: 'contacted', title: 'Contacted', color: 'var(--primary)' },
      { id: 'proposal', title: 'Proposal Sent', color: 'var(--warning)' },
      { id: 'won', title: 'Deals Won 🎉', color: 'var(--success)' },
      { id: 'lost', title: 'Closed Lost', color: 'var(--danger)' }
    ];

    const totalPipelineValue = leads
      .filter(l => l.stage !== 'lost')
      .reduce((sum, l) => sum + (Number(l.estimatedValue) || 0), 0);
    const wonValue = leads
      .filter(l => l.stage === 'won')
      .reduce((sum, l) => sum + (Number(l.estimatedValue) || 0), 0);

    return `
      <!-- Stats Row -->
      <div class="stats-grid">
        <div class="stat-card accent-primary">
          <div class="stat-info">
            <span class="stat-label">Active Pipeline Deals</span>
            <span class="stat-value">${leads.filter(l => l.stage !== 'won' && l.stage !== 'lost').length}</span>
            <span class="stat-subtext">In active progress</span>
          </div>
          <div class="stat-icon primary">
            <svg fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M13 10V3L4 14h7v7l9-11h-7z"></path></svg>
          </div>
        </div>

        <div class="stat-card accent-warning">
          <div class="stat-info">
            <span class="stat-label">Total Pipeline Value</span>
            <span class="stat-value" style="color: var(--warning);">${Formatters.compactCurrency(totalPipelineValue, currency)}</span>
            <span class="stat-subtext">Estimated total deal value</span>
          </div>
          <div class="stat-icon warning">
            <svg fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0 2.08.402 2.599 1M12 8V7m0 1v8m0 0v1m0-1c-1.11 0-2.08-.402-2.599-1M21 12a9 9 0 11-18 0 9 9 0 0118 0z"></path></svg>
          </div>
        </div>

        <div class="stat-card accent-success">
          <div class="stat-info">
            <span class="stat-label">Won Deals Value</span>
            <span class="stat-value" style="color: var(--success);">${Formatters.compactCurrency(wonValue, currency)}</span>
            <span class="stat-subtext" style="color: var(--success);">${leads.filter(l => l.stage === 'won').length} converted clients</span>
          </div>
          <div class="stat-icon success">
            <svg fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z"></path></svg>
          </div>
        </div>
      </div>

      <!-- Header with Add Lead Button -->
      <div style="display: flex; justify-content: space-between; align-items: center; margin-bottom: 20px; flex-wrap: wrap; gap: 12px;">
        <div>
          <h2>Leads Pipeline & CRM</h2>
          <p style="color: var(--text-muted); font-size: 13px;">Manage deal stages from first contact to won conversions.</p>
        </div>
        <button class="btn btn-primary" id="btn-open-add-lead">
          <svg fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 4v16m8-8H4"></path></svg>
          Add New Lead
        </button>
      </div>

      <!-- Kanban Pipeline Board -->
      <div class="kanban-board">
        ${stages.map(stage => {
          const stageLeads = leads.filter(l => l.stage === stage.id);
          const stageTotal = stageLeads.reduce((sum, l) => sum + (Number(l.estimatedValue) || 0), 0);

          return `
            <div class="kanban-column" data-stage="${stage.id}">
              <div class="kanban-column-header">
                <div style="display: flex; align-items: center; gap: 8px;">
                  <span style="width: 8px; height: 8px; border-radius: 50%; background: ${stage.color};"></span>
                  <span>${stage.title}</span>
                </div>
                <span class="count-badge">${stageLeads.length}</span>
              </div>
              <div style="padding: 6px 14px; font-size: 11px; color: var(--text-muted); border-bottom: 1px solid var(--border-color); background: rgba(0,0,0,0.1);">
                Total: <strong>${Formatters.compactCurrency(stageTotal, currency)}</strong>
              </div>
              <div class="kanban-cards-list" data-stage="${stage.id}">
                ${stageLeads.length === 0 ? `
                  <div style="text-align: center; padding: 30px 10px; color: var(--text-muted); font-size: 12px;">
                    No leads here
                  </div>
                ` : stageLeads.map(lead => {
                  return `
                    <div class="lead-card" draggable="true" data-id="${lead.id}">
                      <div class="lead-card-header">
                        <span class="lead-card-title">${Formatters.escapeHtml(lead.title)}</span>
                      </div>
                      <div class="lead-card-val">${Formatters.currency(lead.estimatedValue, currency)}</div>
                      <div class="lead-card-meta">
                        <div>👤 <strong>${Formatters.escapeHtml(lead.contactPerson || 'Lead')}</strong></div>
                        ${lead.company ? `<div>🏢 ${Formatters.escapeHtml(lead.company)}</div>` : ''}
                        <div>📞 ${Formatters.escapeHtml(lead.phone || 'No phone')}</div>
                        ${lead.notes ? `<div style="font-style: italic; margin-top: 4px; color: var(--text-secondary);">${Formatters.escapeHtml(lead.notes)}</div>` : ''}
                      </div>

                      <div class="lead-card-actions">
                        <!-- Quick Stage Shifter Select -->
                        <select class="form-control select-lead-stage" data-id="${lead.id}" style="padding: 3px 6px; font-size: 11px; width: auto; height: 26px;">
                          ${stages.map(s => `
                            <option value="${s.id}" ${s.id === lead.stage ? 'selected' : ''}>
                              ${s.title}
                            </option>
                          `).join('')}
                        </select>

                        <!-- Convert Won Lead to Customer & Quotation -->
                        ${lead.stage === 'won' ? `
                          <button class="btn btn-success btn-sm btn-convert-won-lead" data-id="${lead.id}" title="Convert to Customer & Quotation in 1-Click">
                            ⚡ Convert
                          </button>
                        ` : `
                          <button class="btn btn-outline btn-sm btn-delete-lead" data-id="${lead.id}" style="padding: 2px 6px; color: var(--danger);" title="Delete Lead">
                            ✕
                          </button>
                        `}
                      </div>
                    </div>
                  `;
                }).join('')}
              </div>
            </div>
          `;
        }).join('')}
      </div>
    `;
  },

  postRender() {
    // Stage Selector Change Handler
    const stageSelects = document.querySelectorAll('.select-lead-stage');
    stageSelects.forEach(select => {
      select.addEventListener('change', (e) => {
        const leadId = e.target.dataset.id;
        const newStage = e.target.value;
        store.updateLeadStage(leadId, newStage);
        const app = window.ERP_APP;
        if (app) {
          app.showToast(`Lead moved to ${newStage.toUpperCase()}`, 'success');
          app.refreshCurrentTab();
        }
      });
    });

    // Native Drag and Drop for Kanban Cards
    const cards = document.querySelectorAll('.lead-card');
    const lists = document.querySelectorAll('.kanban-cards-list');

    cards.forEach(card => {
      card.addEventListener('dragstart', (e) => {
        e.dataTransfer.setData('text/plain', card.dataset.id);
        card.style.opacity = '0.5';
      });
      card.addEventListener('dragend', () => {
        card.style.opacity = '1';
      });
    });

    lists.forEach(list => {
      list.addEventListener('dragover', (e) => {
        e.preventDefault();
        list.style.background = 'rgba(99, 102, 241, 0.08)';
      });
      list.addEventListener('dragleave', () => {
        list.style.background = 'transparent';
      });
      list.addEventListener('drop', (e) => {
        e.preventDefault();
        list.style.background = 'transparent';
        const leadId = e.dataTransfer.getData('text/plain');
        const targetStage = list.dataset.stage;
        if (leadId && targetStage) {
          store.updateLeadStage(leadId, targetStage);
          const app = window.ERP_APP;
          if (app) {
            app.showToast(`Lead moved to ${targetStage.toUpperCase()}`, 'success');
            app.refreshCurrentTab();
          }
        }
      });
    });
  }
};
