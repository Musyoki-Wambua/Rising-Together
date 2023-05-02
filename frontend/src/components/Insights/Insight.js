import "./CSS/insight.css"
 
function Insight (){
    return (
    //     <body className="justify-end">
    //     <div className="   main-container">
    //         <div className="year-stats">
    //             <div className="month-group">
    //                 <div className="bar h-100"></div>
    //                 <p className="month">Jan</p>
    //             </div>
    //             <div className="month-group">
    //                 <div className="bar h-50"></div>
    //                 <p className="month">Feb</p>
    //             </div>
    //             <div className="month-group">
    //                 <div className="bar h-75"></div>
    //                 <p className="month">Mar</p>
    //             </div>
    //             <div className="month-group">
    //                 <div className="bar h-25"></div>
    //                 <p className="month">Apr</p>
    //             </div>
    //             <div className="month-group selected">
    //                 <div className="bar h-100"></div>
    //                 <p className="month">May</p>
    //             </div>
    //             <div className="month-group">
    //                 <div className="bar h-50"></div>
    //                 <p className="month">Jun</p>
    //             </div>
    //             <div className="month-group">
    //                 <div className="bar h-75"></div>
    //                 <p className="month">Jul</p>
    //             </div>
    //             <div className="month-group">
    //                 <div className="bar h-25"></div>
    //                 <p className="month">Aug</p>
    //             </div>
    //             <div className="month-group">
    //                 <div className="bar h-50"></div>
    //                 <p className="month">Sep</p>
    //             </div>
    //             <div className="month-group">
    //                 <div className="bar h-75"></div>
    //                 <p className="month">Oct</p>
    //             </div>
    //             <div className="month-group">
    //                 <div className="bar h-25"></div>
    //                 <p className="month">Nov</p>
    //             </div>
    //             <div className="month-group">
    //                 <div className="bar h-100"></div>
    //                 <p className="month">Dez</p>
    //             </div>
    //         </div>
    
    //         <div className="stats-info ">
    //             <div className="graph-container">
    //                 <div className="percent">
    //                     <svg viewBox="0 0 36 36" className="circular-chart">
    //                         <path className="circle" stroke-dasharray="100, 100" d="M18 2.0845
    //       a 15.9155 15.9155 0 0 1 0 31.831
    //       a 15.9155 15.9155 0 0 1 0 -31.831" />
    //                         <path className="circle" stroke-dasharray="85, 100" d="M18 2.0845
    //       a 15.9155 15.9155 0 0 1 0 31.831
    //       a 15.9155 15.9155 0 0 1 0 -31.831" />
    //                         <path className="circle" stroke-dasharray="60, 100" d="M18 2.0845
    //       a 15.9155 15.9155 0 0 1 0 31.831
    //       a 15.9155 15.9155 0 0 1 0 -31.831" />
    //                         <path className="circle" stroke-dasharray="30, 100" d="M18 2.0845
    //       a 15.9155 15.9155 0 0 1 0 31.831
    //       a 15.9155 15.9155 0 0 1 0 -31.831" />
    //                     </svg>
    //                 </div>
    //                 <p>Total: $2075</p>
    //             </div>
    
    //             <div className="info">
    //                 <p>Most expensive category <br /><span>Restaurants & Dining</span></p>
    //                 <p>Updated categories <span>2</span></p>
    //                 <p>Bonus payments <span>$92</span></p>
    //             </div>
    //         </div>
    //     </div>
    // </body>
    <div className="bg-blue-900 h-full">
    <div className="grid grid-cols-2">
    <div className=" ">
    <div class='title'>
  <p>Animated with CSS</p>
   <p class="name">by Vanessa Pitchford Cristobal</p>
</div>
<svg class='container' width="529px" height="486px" viewBox="30 27 529 286" version="1.1" xmlns="http://www.w3.org/2000/svg" >
     
    <desc>Created with Sketch.</desc>
    <defs></defs>
    <g id="graph-copy" stroke="none" stroke-width="1" fill="none" fill-rule="evenodd" transform="translate(30.000000, 27.000000)">
        <g id="y_axis" font-size="15.0833333" font-family=".HelveticaNeueDeskInterface-Regular, .Helvetica Neue DeskInterface" fill="#ffff" opacity="43.4" font-weight="bold">
            <text  id="0">
                <tspan x="25.3008249" y="264.333333" >0</tspan>
            </text>
            <text id="200">
                <tspan x="12.7757572" y="232.666667">200</tspan>
            </text>
            <text id="400">
                <tspan x="12.7757572" y="201">400</tspan>
            </text>
            <text id="600">
                <tspan x="12.7757572" y="169.333333">600</tspan>
            </text>
            <text id="800">
                <tspan x="12.7757572" y="137.666667">800</tspan>
            </text>
            <text id="1000">
                <tspan x="6.51322328" y="106">1000</tspan>
            </text>
            <text id="1200">
                <tspan x="6.51322328" y="74.3333333">1200</tspan>
            </text>
            <text id="1400">
                <tspan x="6.51322328" y="42.6666667">1400</tspan>
            </text>
            <text id="1600">
                <tspan x="6.51322328" y="11">1600</tspan>
            </text>
        </g>
        <g id="GRAPHS" transform="translate(64.000000, 16.000000)" stroke-linecap="round" stroke-width="8" stroke-linejoin="round">
            <polyline id="Banks" stroke="#e1bb47" points="0 1 88.0438662 1 128.985782 137 180.170616 137 224.189573 182 256.947867 91 301.990521 137 346.009479 91 392.087202 91 429.952607 179"></polyline>
            <polyline id="Bridge" stroke="#cc270a" points="2.04739336 183 54.2559242 227 96.2274882 47 133.080569 1 302.018438 1 346.680361 44.6280822 386.957346 0 427.905213 43"></polyline>
            <polyline id="PayPal" stroke="#2196f3" points="2.04739336 180 53.273159 180 99.2985782 91 137.175355 47 219.077488 47 256.947867 90 301.990521 47 349.080569 137 398.228672 137 432 91"></polyline>
        </g>
        <g id="x_axis" transform="translate(71.974046, 271.541667)" font-size="15.0833333" font-family=".HelveticaNeueDeskInterface-Regular, .Helvetica Neue DeskInterface" fill="#fff" opacity="52.4" font-weight="bold">
            <text id="1">
                <tspan x="0.396183206" y="11">1</tspan>
            </text>
            <text id="2">
                <tspan x="39.2603361" y="11">2</tspan>
            </text>
            <text id="3">
                <tspan x="78.8786567" y="11">3</tspan>
            </text>
            <text id="4">
                <tspan x="118.496977" y="11">4</tspan>
            </text>
            <text id="5">
                <tspan x="158.115298" y="11">5</tspan>
            </text>
            <text id="6">
                <tspan x="197.733619" y="11">6</tspan>
            </text>
            <text id="7">
                <tspan x="237.351939" y="11">7</tspan>
            </text>
            <text id="8">
                <tspan x="276.97026" y="11">8</tspan>
            </text>
            <text id="9">
                <tspan x="316.58858" y="11">9</tspan>
            </text>
            <text id="10">
                <tspan x="359.229833" y="11">10</tspan>
            </text>
            <text id="11">
                <tspan x="400.036703" y="11">11</tspan>
            </text>
            <text id="12">
                <tspan x="438.466474" y="11">12</tspan>
            </text>
        </g>
        <g id="grid" transform="translate(46.618321, 4.750000)" stroke="#FFFFFF" stroke-linecap="square" opacity="0.0800000057">
            <path d="M0.396183206,1.1875 L478.991396,1.1875" id="Line"></path>
            <path d="M0.396183206,32.8541667 L478.991396,32.8541667" id="Line"></path>
            <path d="M0.396183206,64.5208333 L478.991396,64.5208333" id="Line"></path>
            <path d="M0.396183206,96.1875 L478.991396,96.1875" id="Line"></path>
            <path d="M0.396183206,127.854167 L478.991396,127.854167" id="Line"></path>
            <path d="M0.396183206,159.520833 L478.991396,159.520833" id="Line"></path>
            <path d="M0.396183206,191.1875 L478.991396,191.1875" id="Line"></path>
            <path d="M0.396183206,222.854167 L478.991396,222.854167" id="Line"></path>
            <path d="M0.396183206,254.520833 L478.991396,254.520833" id="Line"></path>
        </g>
    </g>
</svg>
</div>
<div>
    <div class="pie">
  <div class="top">19% HTML</div>
  <div class="bottom">81% CSS</div>
  <div class="bottom">999% CSS</div>
  
</div></div>
</div>
</div>
    )
}
export default Insight