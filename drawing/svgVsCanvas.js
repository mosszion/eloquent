/*
 * SVG vs Canvas: Key Differences and Usage Examples
 * 
 * This file demonstrates the fundamental differences between SVG and Canvas
 * for web-based graphics and when to use each approach.
 */

// ============================================================================
// KEY DIFFERENCES OVERVIEW
// ============================================================================

/*
1. SVG (Scalable Vector Graphics):
   - Vector-based graphics
   - DOM-based (each element is a DOM node)
   - Declarative approach
   - Scalable without quality loss
   - Interactive elements
   - CSS styleable
   - Accessibility features built-in
   - Better for simple graphics, icons, logos

2. Canvas:
   - Raster-based (pixel manipulation)
   - Imperative JavaScript API
   - Immediate mode rendering
   - Fixed resolution
   - Better performance for complex animations
   - Pixel-level control
   - Better for games, data visualization, image editing
*/

// ============================================================================
// SVG EXAMPLES
// ============================================================================

function createSVGExamples() {
    console.log("=== SVG Examples ===");
    
    // Create SVG container
    const svgContainer = document.createElement('div');
    svgContainer.innerHTML = `
        <h3>SVG Examples</h3>
        <svg width="400" height="300" style="border: 1px solid #ccc;">
            <!-- Simple shapes -->
            <circle cx="50" cy="50" r="30" fill="blue" stroke="black" stroke-width="2" class="interactive-circle"/>
            <rect x="100" y="20" width="60" height="40" fill="red" rx="5"/>
            <polygon points="200,20 230,70 170,70" fill="green"/>
            
            <!-- Path for complex shapes -->
            <path d="M 250 20 Q 280 40 250 70 Q 220 40 250 20" fill="orange" stroke="purple" stroke-width="2"/>
            
            <!-- Text -->
            <text x="50" y="120" font-family="Arial" font-size="14" fill="black">SVG Text</text>
            
            <!-- Groups and transformations -->
            <g transform="translate(50, 150) rotate(45)">
                <rect width="40" height="20" fill="purple"/>
                <text x="5" y="15" font-size="10" fill="white">Rotated</text>
            </g>
            
            <!-- Animation -->
            <circle cx="200" cy="200" r="15" fill="cyan">
                <animate attributeName="cx" values="200;300;200" dur="2s" repeatCount="indefinite"/>
            </circle>
            
            <!-- Interactive elements -->
            <rect x="250" y="180" width="80" height="40" fill="lightblue" 
                  onclick="alert('SVG element clicked!')" style="cursor: pointer;">
                <title>Click me!</title>
            </rect>
        </svg>
    `;
    
    return svgContainer;
}

// SVG Advantages demonstration
function svgAdvantages() {
    console.log("SVG Advantages:");
    console.log("1. Scalable - looks crisp at any size");
    console.log("2. DOM integration - can use CSS, event listeners");
    console.log("3. Accessibility - screen readers can interpret");
    console.log("4. Smaller file sizes for simple graphics");
    console.log("5. Can be styled with CSS");
    console.log("6. Interactive elements built-in");
}

// ============================================================================
// CANVAS EXAMPLES
// ============================================================================

function createCanvasExamples() {
    console.log("=== Canvas Examples ===");
    
    const canvasContainer = document.createElement('div');
    canvasContainer.innerHTML = '<h3>Canvas Examples</h3>';
    
    // Create canvas element
    const canvas = document.createElement('canvas');
    canvas.width = 400;
    canvas.height = 300;
    canvas.style.border = '1px solid #ccc';
    
    const ctx = canvas.getContext('2d');
    
    // Basic shapes
    drawBasicShapes(ctx);
    
    // Complex graphics
    drawComplexGraphics(ctx);
    
    // Animation example
    animateCanvas(canvas, ctx);
    
    canvasContainer.appendChild(canvas);
    return canvasContainer;
}

function drawBasicShapes(ctx) {
    // Circle
    ctx.beginPath();
    ctx.arc(50, 50, 30, 0, 2 * Math.PI);
    ctx.fillStyle = 'blue';
    ctx.fill();
    ctx.strokeStyle = 'black';
    ctx.lineWidth = 2;
    ctx.stroke();
    
    // Rectangle
    ctx.fillStyle = 'red';
    ctx.fillRect(100, 20, 60, 40);
    
    // Triangle
    ctx.beginPath();
    ctx.moveTo(200, 20);
    ctx.lineTo(230, 70);
    ctx.lineTo(170, 70);
    ctx.closePath();
    ctx.fillStyle = 'green';
    ctx.fill();
    
    // Bezier curve
    ctx.beginPath();
    ctx.moveTo(250, 20);
    ctx.quadraticCurveTo(280, 40, 250, 70);
    ctx.quadraticCurveTo(220, 40, 250, 20);
    ctx.fillStyle = 'orange';
    ctx.fill();
    ctx.strokeStyle = 'purple';
    ctx.lineWidth = 2;
    ctx.stroke();
    
    // Text
    ctx.fillStyle = 'black';
    ctx.font = '14px Arial';
    ctx.fillText('Canvas Text', 50, 120);
}

function drawComplexGraphics(ctx) {
    // Gradient
    const gradient = ctx.createLinearGradient(50, 150, 150, 200);
    gradient.addColorStop(0, 'red');
    gradient.addColorStop(1, 'blue');
    ctx.fillStyle = gradient;
    ctx.fillRect(50, 150, 100, 50);
    
    // Image manipulation example (if you have an image)
    // ctx.drawImage(image, x, y);
    
    // Pixel manipulation
    drawPixelArt(ctx);
}

function drawPixelArt(ctx) {
    const imageData = ctx.createImageData(50, 50);
    const data = imageData.data;
    
    for (let i = 0; i < data.length; i += 4) {
        const x = (i / 4) % 50;
        const y = Math.floor((i / 4) / 50);
        
        // Create a simple pattern
        data[i] = (x * y) % 255;     // Red
        data[i + 1] = x * 5;         // Green
        data[i + 2] = y * 5;         // Blue
        data[i + 3] = 255;           // Alpha
    }
    
    ctx.putImageData(imageData, 200, 150);
}

function animateCanvas(canvas, ctx) {
    let animationId;
    let x = 300;
    let direction = 1;
    
    function animate() {
        // Clear specific area
        ctx.clearRect(250, 200, 100, 50);
        
        // Draw moving rectangle
        ctx.fillStyle = 'lightblue';
        ctx.fillRect(x, 220, 40, 20);
        
        x += direction * 2;
        if (x > 350 || x < 250) direction *= -1;
        
        animationId = requestAnimationFrame(animate);
    }
    
    animate();
    
    // Stop animation after 10 seconds
    setTimeout(() => {
        cancelAnimationFrame(animationId);
    }, 10000);
}

// Canvas Advantages demonstration
function canvasAdvantages() {
    console.log("Canvas Advantages:");
    console.log("1. Better performance for complex graphics");
    console.log("2. Pixel-level control");
    console.log("3. Great for games and real-time graphics");
    console.log("4. Image processing capabilities");
    console.log("5. WebGL support for 3D graphics");
    console.log("6. No DOM overhead");
}

// ============================================================================
// COMPARISON AND USE CASES
// ============================================================================

function comparePerformance() {
    console.log("=== Performance Comparison ===");
    
    console.log("SVG Performance:");
    console.log("- Good for simple graphics with few elements");
    console.log("- Performance degrades with many DOM elements");
    console.log("- Each element requires memory");
    console.log("- Browser handles rendering optimization");
    
    console.log("Canvas Performance:");
    console.log("- Better for complex scenes with many objects");
    console.log("- Immediate mode - no memory of drawn objects");
    console.log("- Manual optimization required");
    console.log("- Direct pixel manipulation possible");
}

function useCaseGuidelines() {
    console.log("=== When to Use SVG ===");
    console.log("✓ Icons and logos");
    console.log("✓ Simple illustrations");
    console.log("✓ Interactive diagrams");
    console.log("✓ Charts with interactivity");
    console.log("✓ Scalable graphics");
    console.log("✓ Accessibility is important");
    console.log("✓ CSS styling needed");
    
    console.log("=== When to Use Canvas ===");
    console.log("✓ Games and animations");
    console.log("✓ Data visualizations with many points");
    console.log("✓ Image editing applications");
    console.log("✓ Real-time graphics");
    console.log("✓ Complex visual effects");
    console.log("✓ Performance-critical applications");
    console.log("✓ Pixel manipulation needed");
}

// ============================================================================
// PRACTICAL EXAMPLE: CHART COMPARISON
// ============================================================================

function createSVGChart() {
    const data = [10, 20, 30, 25, 35];
    const svgChart = document.createElement('div');
    
    let svgContent = '<h4>SVG Bar Chart</h4><svg width="300" height="200">';
    
    data.forEach((value, index) => {
        const height = value * 4;
        const x = index * 50 + 20;
        const y = 180 - height;
        
        svgContent += `
            <rect x="${x}" y="${y}" width="40" height="${height}" 
                  fill="steelblue" stroke="white" stroke-width="1"
                  onmouseover="this.style.fill='green'" 
                  onmouseout="this.style.fill='steelblue'">
                <title>Value: ${value}</title>
            </rect>
            <text x="${x + 20}" y="195" text-anchor="middle" font-size="12">${value}</text>
        `;
    });
    
    svgContent += '</svg>';
    svgChart.innerHTML = svgContent;
    return svgChart;
}

function createCanvasChart() {
    const data = [10, 20, 30, 25, 35];
    const canvasChart = document.createElement('div');
    canvasChart.innerHTML = '<h4>Canvas Bar Chart</h4>';
    
    const canvas = document.createElement('canvas');
    canvas.width = 300;
    canvas.height = 200;
    const ctx = canvas.getContext('2d');
    
    // Draw bars
    data.forEach((value, index) => {
        const height = value * 4;
        const x = index * 50 + 20;
        const y = 180 - height;
        
        ctx.fillStyle = 'steelblue';
        ctx.fillRect(x, y, 40, height);
        
        // Add labels
        ctx.fillStyle = 'black';
        ctx.font = '12px Arial';
        ctx.textAlign = 'center';
        ctx.fillText(value.toString(), x + 20, 195);
    });
    
    // Add interactivity manually
    canvas.addEventListener('mousemove', (e) => {
        const rect = canvas.getBoundingClientRect();
        const x = e.clientX - rect.left;
        const y = e.clientY - rect.top;
        
        // Check if mouse is over a bar (simplified)
        const barIndex = Math.floor((x - 20) / 50);
        if (barIndex >= 0 && barIndex < data.length) {
            canvas.style.cursor = 'pointer';
            // Could redraw with highlighted bar here
        } else {
            canvas.style.cursor = 'default';
        }
    });
    
    canvasChart.appendChild(canvas);
    return canvasChart;
}

// ============================================================================
// INTEGRATION AND HYBRID APPROACHES
// ============================================================================

function hybridApproach() {
    console.log("=== Hybrid Approaches ===");
    console.log("You can combine SVG and Canvas:");
    console.log("1. Use SVG for UI elements and Canvas for main graphics");
    console.log("2. Overlay SVG on Canvas for interactive controls");
    console.log("3. Convert between formats as needed");
    console.log("4. Use libraries like D3.js that can work with both");
}

// ============================================================================
// MAIN DEMONSTRATION FUNCTION
// ============================================================================

function demonstrateSVGvsCanvas() {
    console.log("SVG vs Canvas Demonstration");
    console.log("==========================");
    
    // Create container or use existing demo container
    let container = document.getElementById('demo-container');
    if (!container) {
        container = document.createElement('div');
        container.style.cssText = 'font-family: Arial, sans-serif; padding: 20px;';
        document.body.appendChild(container);
    }
    
    // Add examples
    container.appendChild(createSVGExamples());
    container.appendChild(createCanvasExamples());
    container.appendChild(createSVGChart());
    container.appendChild(createCanvasChart());
    
    // Log comparisons
    svgAdvantages();
    canvasAdvantages();
    comparePerformance();
    useCaseGuidelines();
    hybridApproach();
}

// ============================================================================
// EXPORT FOR NODE.JS OR BROWSER
// ============================================================================

if (typeof module !== 'undefined' && module.exports) {
    module.exports = {
        demonstrateSVGvsCanvas,
        createSVGExamples,
        createCanvasExamples,
        svgAdvantages,
        canvasAdvantages,
        comparePerformance,
        useCaseGuidelines
    };
} else if (typeof window !== 'undefined') {
    // Browser environment - make functions available globally
    window.SVGvsCanvas = {
        demonstrateSVGvsCanvas,
        createSVGExamples,
        createCanvasExamples
    };
}

// Run demonstration if in browser
if (typeof document !== 'undefined' && document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', demonstrateSVGvsCanvas);
} else if (typeof document !== 'undefined') {
    demonstrateSVGvsCanvas();
}