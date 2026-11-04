/* Capstone deck content. Edit the text here; layout is handled in deck.js / deck.css.
   Slide order follows the Agent 007 capstone template. `chapter` groups slides under the top-bar chips. */
window.DECK = [
{ chapter:'Intro', title:'Title', cls:'cover', html:`
  <p class="s-kicker i">Capstone Presentation</p>
  <h1 class="s-cover">Hallworth &amp; Pierce<br><span>Brightcurrent Agent</span></h1>
  <p class="s-sub">Agent 007</p>
  <div class="s-people"><div><b>Name</b><span>Title</span></div><div><b>Name</b><span>Title</span></div></div>`},

{ chapter:'Intro', title:'Forward-looking statements', html:`
  <h2>Forward-looking statements</h2>
  <p class="s-legal">This presentation contains forward-looking statements about, among other things, trend analyses and statements regarding future events, anticipated growth and industry prospects, and our strategies, expectations, or plans regarding product releases and enhancements. The achievement or success of the matters covered by such forward-looking statements involves risks, uncertainties, and assumptions. If any such risks or uncertainties materialize or if any of the assumptions prove incorrect, results or outcomes could differ materially from those expressed or implied by these forward-looking statements. The risks and uncertainties referred to above include those factors discussed in Salesforce's reports filed from time to time with the Securities and Exchange Commission, including, but not limited to: our ability to meet the expectations of our customers; uncertainties regarding AI technologies and their integration into our product offerings; the effect of evolving domestic and foreign government regulations; regulatory developments and regulatory investigations involving us or affecting our industry; our ability to successfully introduce new services and product features, including related to AI and Agentforce; our ability to execute our business plans; our ability to meet our long-term revenue targets and profitable growth framework; the pace of change and innovation and our ability to compete in the markets in which we participate; our ability to maintain and enhance our brands; and expectations regarding contributions from acquired companies.</p>`},

{ chapter:'Intro', title:'Thank you', cls:'cover image', html:`<img class="s-fill" src="assets/thank-you.jpg" alt="Thank you">`},

{ chapter:'Intro', title:'The Brightcurrent FDE Team', html:`
  <h2>The Brightcurrent FDE Team</h2>
  <div class="s-grid g4 team">
    <div class="s-card"><div class="avatar"><img src="assets/team-matthew.jpg" alt="Matthew Haines"></div><h4>Matthew Haines</h4><p>Principal Forward Deployed Engineer</p></div>
    <div class="s-card"><div class="avatar"><img src="assets/team-anastasiya.jpg" alt="Anastasiya Combs"></div><h4>Anastasiya Combs</h4><p>Distinguished Deployment Strategist</p></div>
    <div class="s-card"><div class="avatar"><img src="assets/team-caleb.jpg" alt="Caleb Truax"></div><h4>Caleb Truax</h4><p>Lead Deployment Strategist</p></div>
    <div class="s-card"><div class="avatar"><img src="assets/team-derek.jpg" alt="Derek Jackson"></div><h4>Derek Jackson</h4><p>Senior Manager, Forward Deployed Engineering</p></div>
  </div>`},

{ chapter:'Challenge', title:'Our Challenge', html:`
  <h2>Our Challenge</h2>
  <p class="s-lead">Shoppers can't quickly find the right laundry product or the right fix for a stain, and our support team answers the same questions all day.</p>
  <h3 class="s-h3">Why This Matters</h3>
  <div class="s-grid g3">
    <div class="s-card"><span class="num">1</span><h4>Confusing choice</h4><p>Pods, liquid, powder and boosters across several brands. Shoppers don't know which one fits their load.</p></div>
    <div class="s-card"><span class="num">2</span><h4>Repetitive support</h4><p>Most contacts are routine: "which product?", "how do I remove this stain?", "where is my order?"</p></div>
    <div class="s-card"><span class="num">3</span><h4>Lost loyalty</h4><p>An unanswered question at the moment of purchase sends shoppers to a competitor.</p></div>
  </div>`},

{ chapter:'Challenge', title:'Your Industry: What We Know', html:`
  <h2>Your Industry: What We Know</h2>
  <div class="s-grid g2 wide-l">
    <div class="s-card dark"><h4 class="gold">At a glance</h4>
      <ul class="s-list"><li><b>Industry:</b> Household &amp; fabric care (CPG)</li><li><b>Customer:</b> Hallworth &amp; Pierce, a family of brands: Brightcurrent, Softly, Fresh Spin</li><li><b>Channels:</b> Retail, e-commerce, social, contact center</li><li><b>Pressure:</b> Private-label competition, rising service costs, growing expectation of instant answers</li></ul></div>
    <div>
      <div class="s-card"><h4>Vision statement</h4><p>Make everyday care a little easier for every home, with help that is there at the moment a shopper needs it.</p></div>
      <div class="s-card" style="margin-top:1.4cqw"><h4>Team roles</h4><ul class="s-list"><li><b>[Name]</b>: Role</li><li><b>[Name]</b>: Role</li><li><b>[Name]</b>: Role</li></ul></div>
    </div>
  </div>`},

{ chapter:'Discovery & Solution', title:'Solution', cls:'section', html:`
  <p class="s-kicker">Solution</p>
  <h2 class="s-big">An Agentforce agent on the Brightcurrent site that recommends the right product, solves stains, and hands off to a person when it should.</h2>
  <div class="s-flow"><div>Ask</div><i>›</i><div>Understand</div><i>›</i><div>Resolve</div><i>›</i><div>Hand off</div></div>`},

{ chapter:'Discovery & Solution', title:'Discovery Findings', html:`
  <h2>Discovery Findings</h2>
  <div class="s-grid g5">
    <div class="s-card"><h4>The Ask</h4><p>Answer shopping and service questions on the website, any hour.</p></div>
    <div class="s-card"><h4>Success</h4><p>Fewer repeat contacts, higher conversion, better customer satisfaction.</p></div>
    <div class="s-card"><h4>Constraints</h4><p>Brand-safe tone, no unsupported product claims, existing service tools stay.</p></div>
    <div class="s-card"><h4>Stakeholders</h4><p>Brand marketing, e-commerce, consumer care, legal and IT security.</p></div>
    <div class="s-card"><h4>Urgency</h4><p>Peak laundry season and a new product launch need coverage.</p></div>
  </div>
  <div class="s-note"><b>Key discovery insight:</b> Most questions are really "which product, and how do I use it?" That is a guided recommendation problem, not just FAQ search, so the agent has to ask clarifying questions first.</div>`},

{ chapter:'Discovery & Solution', title:'Our North Star', html:`
  <h2>Our North Star</h2>
  <div class="s-grid g2">
    <div class="s-card dark"><h4 class="gold">Our solution</h4><p>We'll build an AI agent directly on the brand website that answers shopping and service questions, recommends products and walks shoppers through stain removal, resulting in more informed, loyal customers and a less burdened support team.</p></div>
    <div class="s-card"><h4>Reasoning</h4><p>Shoppers decide on the product page, so the agent lives there. It is grounded in approved product and care content, so answers stay on brand and accurate. A guided, topic-based design beats a generic chatbot because each conversation has a clear job and a clear exit to a human.</p></div>
  </div>`},

{ chapter:'Impact', title:'Business Impact', html:`
  <h2>Business Impact</h2>
  <div class="s-grid g3 kpis">
    <div class="s-card kpi"><h4>Dollar impact</h4><b>$1.2M</b><p>annual support cost avoided</p></div>
    <div class="s-card kpi"><h4>Efficiency impact</h4><b>35%</b><p>of contacts resolved by the agent</p></div>
    <div class="s-card kpi"><h4>FTE impact</h4><b>6</b><p>FTE of capacity redeployed</p></div>
  </div>
  <div class="s-note"><b>Show your math (illustrative):</b> 400K contacts a year × 35% resolved by the agent = 140K contacts × $8.50 per contact ≈ $1.2M. 140K ÷ ~23K contacts per FTE ≈ 6 FTE. <b>Consumption model:</b> Flex Credits, with outcome-based pricing as the agent matures.</div>`},

{ chapter:'Roadmap', title:'MVP & Roadmap', html:`
  <h2>MVP &amp; Roadmap</h2>
  <div class="s-grid g3 phases">
    <div class="s-card dark"><h4>Phase 1: MVP</h4><p>Web agent for product finder, stain help and order status. Targets contact deflection and conversion. Excludes voice, returns and payments.</p></div>
    <div class="s-card"><h4>Phase 2: Expand</h4><p>Next 3 to 6 months: Softly and Fresh Spin, Slack for care agents, and mobile. Triggered by Phase 1 deflection and CSAT targets. Depends on unified product data and licensing.</p></div>
    <div class="s-card"><h4>Phase 3: Vision</h4><p>12 months and beyond: proactive reorder and care reminders, voice, and one portfolio-wide assistant for every Hallworth &amp; Pierce brand. Needs shared customer data and a central governance team.</p></div>
  </div>
  <div class="s-note"><b>Why this sequence?</b> Prove value on one brand and one channel, then reuse the same topics and data across the family.</div>`},

{ chapter:'Architecture', title:'Agent Design & Architecture', html:`
  <h2>Agent Design &amp; Architecture</h2>
  <div class="s-arch">
    <div class="col"><h5>Channels</h5><div class="box">Brightcurrent website</div><div class="box">Slack (Phase 2)</div><div class="box">Mobile (Phase 2)</div></div>
    <i>›</i>
    <div class="col big"><h5>Agentforce agent</h5><div class="box strong">Topic: Product finder</div><div class="box strong">Topic: Stain help</div><div class="box strong">Topic: Order support</div><div class="box strong">Topic: Human handoff</div></div>
    <i>›</i>
    <div class="col"><h5>Actions</h5><div class="box">Prompt templates</div><div class="box">Flows</div><div class="box">Apex / APIs</div></div>
    <i>›</i>
    <div class="col"><h5>Data</h5><div class="box">Data 360</div><div class="box">Knowledge</div><div class="box">Commerce &amp; Service Cloud</div></div>
  </div>
  <div class="s-note"><b>Design decisions:</b> One topic per job keeps instructions short and behavior predictable. Retrieval from approved content avoids unsupported claims. Handoff is its own topic so escalation never depends on another topic going well.</div>`},

{ chapter:'Architecture', title:'Deployment Strategy', html:`
  <h2>Deployment Strategy</h2>
  <div class="s-grid g4">
    <div class="s-card"><h4>Web</h4><span class="pill live">Phase 1</span><p>Embedded on the brand site where purchase decisions happen.</p></div>
    <div class="s-card"><h4>Mobile</h4><span class="pill">Phase 2</span><p>Same agent inside the brand app and mobile web.</p></div>
    <div class="s-card"><h4>Slack</h4><span class="pill">Phase 2</span><p>Internal assistant for care agents and brand teams.</p></div>
    <div class="s-card"><h4>Voice</h4><span class="pill">Phase 3</span><p>Phone line deflection once text quality is proven.</p></div>
  </div>
  <div class="s-note"><b>Why this approach:</b> Start in text on the web, where the most questions arrive and risk is lowest, then add surfaces that reuse the same agent.</div>`},

{ chapter:'Knowledge', title:'Knowledge grounding', cls:'frame', frame:'decks/knowledge.html#1' },

{ chapter:'Trust', title:'Responsible AI', html:`
  <h2>Responsible AI</h2>
  <div class="s-grid g2 wide-r">
    <div>
      <h3 class="s-h3">Consequence scanning</h3>
      <div class="s-grid g2 tight">
        <div class="s-card"><h4>Intended +</h4><p>Faster answers, better product fit, relieved support team.</p></div>
        <div class="s-card"><h4>Unintended +</h4><p>Question data reveals gaps in product content.</p></div>
        <div class="s-card"><h4>Intended −</h4><p>Some shoppers prefer a person; the agent must make that easy.</p></div>
        <div class="s-card"><h4>Unintended −</h4><p>Overconfident care advice could damage fabrics.</p></div>
      </div>
    </div>
    <div class="s-card dark"><h4 class="gold">Design safeguards</h4><ul class="s-list"><li>Always disclose that it is an AI agent</li><li>Answers grounded in approved content only</li><li>Clear, one-step path to a human</li><li>No medical or safety advice; refer to labels</li></ul></div>
  </div>`},

{ chapter:'Trust', title:'Data & Integration', html:`
  <h2>Data &amp; Integration</h2>
  <div class="s-grid g2">
    <div class="s-card"><h4>Data sources</h4><ul class="s-list"><li>Product catalog and ingredient content</li><li>Stain and fabric care knowledge articles</li><li>Order and customer profile data</li><li>Past case history, anonymized</li></ul></div>
    <div class="s-card"><h4>Integration points</h4><ul class="s-list"><li>Data 360 for unified customer data</li><li>Service Cloud for cases and handoff</li><li>Commerce for orders and availability</li><li>Slack for internal escalation</li></ul></div>
  </div>`},

{ chapter:'Trust', title:'Security & Trust', html:`
  <h2>Security &amp; Trust</h2>
  <div class="s-grid g2">
    <div class="s-card"><h4>Platform access controls</h4><p>Permission sets, running user, profiles and field-level security: the standard Salesforce model decides what the agent can see.</p></div>
    <div class="s-card"><h4>Agentforce guardrails</h4><p>Topics and instructions, public vs. private actions, and behavioral limits keep the agent in scope.</p></div>
  </div>
  <div class="s-card dark wide"><h4 class="gold">Einstein Trust Layer / Salesforce Guardian</h4>
    <div class="pills"><span>Secure data retrieval</span><span>Dynamic grounding</span><span>Data masking</span><span>Toxicity detection</span><span>Zero data retention</span></div></div>`},

{ chapter:'Testing', title:'Testing Approach', html:`
  <h2>Testing Approach</h2>
  <div class="s-grid g5">
    <div class="s-card"><h4>Functional</h4><p>Expected prompts get the correct responses.</p></div>
    <div class="s-card"><h4>Guardrail</h4><p>Fires when expected and stays in scope.</p></div>
    <div class="s-card"><h4>Multi-turn</h4><p>Keeps state across turns.</p></div>
    <div class="s-card"><h4>T&amp;S</h4><p>Perturbation, bias and guardrail regression.</p></div>
    <div class="s-card"><h4>Edge / regression</h4><p>Odd inputs and regressions after changes.</p></div>
  </div>
  <div class="s-note"><b>Findings &amp; AI-assisted code review:</b> Add your real test examples here, such as a prompt that revealed a gap and the fix.</div>`},

{ chapter:'Live Demo', title:'Live Demo', cls:'section demo', html:`
  <p class="s-kicker">Live Demo</p>
  <h2 class="s-big">Let's see it work.</h2>
  <div class="s-actions"><button data-act="site">Show the site</button><button data-act="agent" class="ghost">Open the agent</button></div>`},

{ chapter:'Measure', title:'Measuring Success', html:`
  <h2>Measuring Success</h2>
  <div class="s-grid g3">
    <div class="s-card"><h4>What we track</h4><p>Adoption, ability and consumption.</p></div>
    <div class="s-card"><h4>How we track it</h4><p>Agent Analytics dashboards, health monitoring, session tracing and a regular review cadence.</p></div>
    <div class="s-card dark"><h4 class="gold">Continuous improvement</h4><div class="s-flow small"><div>Build</div><i>›</i><div>Test</div><i>›</i><div>Monitor</div><i>›</i><div>Optimize</div></div></div>
  </div>`},

{ chapter:'Next Steps', title:'Recommendations & Next Steps', html:`
  <h2>Recommendations &amp; Next Steps</h2>
  <div class="s-grid g3">
    <div class="s-card"><span class="num">1</span><h4>Launch the MVP</h4><p>Web agent on Brightcurrent for product finder, stain help and order status.</p></div>
    <div class="s-card"><span class="num">2</span><h4>Establish governance</h4><p>Name content owners and a review cadence for answers and guardrails.</p></div>
    <div class="s-card"><span class="num">3</span><h4>Plan the expansion</h4><p>Line up Softly and Fresh Spin data and the Phase 2 channels.</p></div>
  </div>
  <div class="s-note"><b>Next steps:</b> Confirm scope and success metrics, schedule a working session with Care and E-commerce, and book the next customer meeting.</div>`},

{ chapter:'Next Steps', title:'Thank you', cls:'cover image', html:`<img class="s-fill" src="assets/thank-you.jpg" alt="Thank you">`}
];
