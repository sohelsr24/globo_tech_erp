/**
 * Zero-dependency SVG Chart Renderer
 * Provides sleek, responsive Bar, Line, and Donut charts with tooltips and animations.
 */

export const ChartRenderer = {
  // Render Bar Chart (e.g., Monthly Sales vs Expenses)
  renderBarChart(containerId, options = {}) {
    const container = document.getElementById(containerId);
    if (!container) return;

    const {
      labels = [],
      series = [], // [{ name: 'Revenue', color: '#10b981', data: [] }, { name: 'Expense', color: '#ef4444', data: [] }]
      height = 240,
      currency = '৳'
    } = options;

    if (!labels.length || !series.length) {
      container.innerHTML = `<div class="chart-empty">No data available to display</div>`;
      return;
    }

    // Find max value
    let maxVal = 0;
    series.forEach(s => {
      s.data.forEach(v => {
        if (v > maxVal) maxVal = v;
      });
    });
    if (maxVal === 0) maxVal = 100;
    maxVal = Math.ceil(maxVal * 1.15); // Add headroom

    const width = 600;
    const paddingLeft = 50;
    const paddingRight = 20;
    const paddingTop = 25;
    const paddingBottom = 35;
    const chartWidth = width - paddingLeft - paddingRight;
    const chartHeight = height - paddingTop - paddingBottom;

    // Y Axis grid lines (4 intervals)
    const yTicks = 4;
    let gridLinesSvg = '';
    for (let i = 0; i <= yTicks; i++) {
      const val = Math.round((maxVal / yTicks) * i);
      const y = paddingTop + chartHeight - (val / maxVal) * chartHeight;
      gridLinesSvg += `
        <line x1="${paddingLeft}" y1="${y}" x2="${width - paddingRight}" y2="${y}" stroke="var(--border-color)" stroke-dasharray="3,3" opacity="0.6"/>
        <text x="${paddingLeft - 8}" y="${y + 4}" font-size="10" fill="var(--text-muted)" text-anchor="end">${currency}${val >= 1000 ? (val/1000).toFixed(0)+'k' : val}</text>
      `;
    }

    // Group bars
    const groupCount = labels.length;
    const groupWidth = chartWidth / groupCount;
    const seriesCount = series.length;
    const barWidth = Math.min(22, (groupWidth * 0.7) / seriesCount);
    const innerSpacing = 4;
    const totalGroupBarWidth = seriesCount * barWidth + (seriesCount - 1) * innerSpacing;

    let barsSvg = '';
    let xLabelsSvg = '';

    labels.forEach((label, gIdx) => {
      const groupCenterX = paddingLeft + gIdx * groupWidth + groupWidth / 2;
      const groupStartX = groupCenterX - totalGroupBarWidth / 2;

      series.forEach((s, sIdx) => {
        const val = s.data[gIdx] || 0;
        const barH = (val / maxVal) * chartHeight;
        const bx = groupStartX + sIdx * (barWidth + innerSpacing);
        const by = paddingTop + chartHeight - barH;

        barsSvg += `
          <rect class="chart-bar" x="${bx}" y="${by}" width="${barWidth}" height="${barH}" rx="4" fill="${s.color}" data-label="${label}" data-series="${s.name}" data-val="${currency} ${val.toLocaleString()}">
            <title>${s.name} (${label}): ${currency} ${val.toLocaleString()}</title>
          </rect>
        `;
      });

      xLabelsSvg += `
        <text x="${groupCenterX}" y="${height - 10}" font-size="11" fill="var(--text-muted)" text-anchor="middle">${label}</text>
      `;
    });

    // Legends
    let legendHtml = '<div class="chart-legend">';
    series.forEach(s => {
      legendHtml += `
        <div class="legend-item">
          <span class="legend-color" style="background-color: ${s.color};"></span>
          <span>${s.name}</span>
        </div>
      `;
    });
    legendHtml += '</div>';

    container.innerHTML = `
      <div class="chart-wrapper">
        <svg viewBox="0 0 ${width} ${height}" preserveAspectRatio="xMidYMid meet" class="svg-chart">
          ${gridLinesSvg}
          ${barsSvg}
          ${xLabelsSvg}
        </svg>
        ${legendHtml}
      </div>
    `;
  },

  // Render Donut Chart (e.g., Expense by Category)
  renderDonutChart(containerId, options = {}) {
    const container = document.getElementById(containerId);
    if (!container) return;

    const {
      data = [], // [{ label: 'Rent', value: 20000, color: '#6366f1' }]
      size = 200,
      currency = '৳',
      centerLabel = 'Total'
    } = options;

    const total = data.reduce((acc, item) => acc + (Number(item.value) || 0), 0);

    if (total === 0 || !data.length) {
      container.innerHTML = `<div class="chart-empty">No expense data recorded</div>`;
      return;
    }

    const radius = 70;
    const strokeWidth = 24;
    const cx = size / 2;
    const cy = size / 2;
    const circumference = 2 * Math.PI * radius;

    let accumulatedAngle = 0;
    let slicesSvg = '';

    data.forEach(item => {
      const percentage = (item.value / total);
      const dashLength = percentage * circumference;
      const strokeDashoffset = -accumulatedAngle * circumference;

      slicesSvg += `
        <circle 
          cx="${cx}" cy="${cy}" r="${radius}" 
          fill="none" 
          stroke="${item.color}" 
          stroke-width="${strokeWidth}" 
          stroke-dasharray="${dashLength} ${circumference}" 
          stroke-dashoffset="${strokeDashoffset}"
          class="chart-donut-slice"
          transform="rotate(-90 ${cx} ${cy})"
        >
          <title>${item.label}: ${currency} ${item.value.toLocaleString()} (${(percentage * 100).toFixed(1)}%)</title>
        </circle>
      `;

      accumulatedAngle += percentage;
    });

    let legendHtml = '<div class="donut-legend">';
    data.forEach(item => {
      const pct = ((item.value / total) * 100).toFixed(1);
      legendHtml += `
        <div class="donut-legend-item">
          <div class="donut-label-wrapper">
            <span class="legend-color" style="background-color: ${item.color};"></span>
            <span class="donut-label-name">${item.label}</span>
          </div>
          <span class="donut-label-val">${currency} ${item.value.toLocaleString()} <span class="donut-pct">(${pct}%)</span></span>
        </div>
      `;
    });
    legendHtml += '</div>';

    container.innerHTML = `
      <div class="donut-chart-wrapper">
        <div class="donut-svg-container">
          <svg width="${size}" height="${size}" viewBox="0 0 ${size} ${size}">
            ${slicesSvg}
          </svg>
          <div class="donut-center-info">
            <span class="donut-center-title">${centerLabel}</span>
            <span class="donut-center-amount">${currency} ${total >= 1000 ? (total/1000).toFixed(1) + 'k' : total.toLocaleString()}</span>
          </div>
        </div>
        ${legendHtml}
      </div>
    `;
  },

  // Render Line / Area Chart (e.g. Cash Flow Trajectory)
  renderLineChart(containerId, options = {}) {
    const container = document.getElementById(containerId);
    if (!container) return;

    const {
      labels = [],
      data = [],
      height = 200,
      currency = '৳',
      lineColor = '#6366f1',
      areaColor = 'rgba(99, 102, 241, 0.15)'
    } = options;

    if (!labels.length || !data.length) {
      container.innerHTML = `<div class="chart-empty">No trend data available</div>`;
      return;
    }

    const width = 600;
    const paddingLeft = 45;
    const paddingRight = 20;
    const paddingTop = 20;
    const paddingBottom = 30;
    const chartWidth = width - paddingLeft - paddingRight;
    const chartHeight = height - paddingTop - paddingBottom;

    const maxVal = Math.max(...data, 100) * 1.15;
    const minVal = Math.min(0, Math.min(...data));
    const range = maxVal - minVal || 1;

    // Grid lines
    let gridSvg = '';
    const ticks = 4;
    for (let i = 0; i <= ticks; i++) {
      const val = minVal + (range / ticks) * i;
      const y = paddingTop + chartHeight - ((val - minVal) / range) * chartHeight;
      gridSvg += `
        <line x1="${paddingLeft}" y1="${y}" x2="${width - paddingRight}" y2="${y}" stroke="var(--border-color)" stroke-dasharray="3,3" opacity="0.6"/>
        <text x="${paddingLeft - 8}" y="${y + 4}" font-size="10" fill="var(--text-muted)" text-anchor="end">${currency}${val >= 1000 ? (val/1000).toFixed(0)+'k' : Math.round(val)}</text>
      `;
    }

    // Points calculation
    const points = data.map((val, idx) => {
      const x = paddingLeft + (idx / (labels.length - 1 || 1)) * chartWidth;
      const y = paddingTop + chartHeight - ((val - minVal) / range) * chartHeight;
      return { x, y, val, label: labels[idx] };
    });

    const pathD = points.reduce((acc, pt, idx) => {
      return idx === 0 ? `M ${pt.x},${pt.y}` : `${acc} L ${pt.x},${pt.y}`;
    }, '');

    const areaD = `${pathD} L ${points[points.length - 1].x},${paddingTop + chartHeight} L ${points[0].x},${paddingTop + chartHeight} Z`;

    let dotsSvg = '';
    points.forEach(pt => {
      dotsSvg += `
        <circle cx="${pt.x}" cy="${pt.y}" r="4" fill="${lineColor}" stroke="var(--card-bg)" stroke-width="2">
          <title>${pt.label}: ${currency} ${pt.val.toLocaleString()}</title>
        </circle>
      `;
    });

    let xLabelsSvg = '';
    points.forEach(pt => {
      xLabelsSvg += `
        <text x="${pt.x}" y="${height - 8}" font-size="10" fill="var(--text-muted)" text-anchor="middle">${pt.label}</text>
      `;
    });

    container.innerHTML = `
      <div class="chart-wrapper">
        <svg viewBox="0 0 ${width} ${height}" preserveAspectRatio="xMidYMid meet" class="svg-chart">
          ${gridSvg}
          <path d="${areaD}" fill="${areaColor}" />
          <path d="${pathD}" fill="none" stroke="${lineColor}" stroke-width="2.5" stroke-linecap="round" stroke-linejoin="round"/>
          ${dotsSvg}
          ${xLabelsSvg}
        </svg>
      </div>
    `;
  }
};
