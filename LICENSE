// D3 vansh-vriksh: layout, zoom/pan, khulna-band hona, highlight, kisi node par le jaana.
// D3 index.html me CDN se aata hai (window.d3).

import { cardLine, vanshOf } from "./rules.js";
import { accent, cut } from "./ui.js";

const d3 = window.d3;

// Graph ka naap (px)
const LAYOUT = {
  nodeW: 260,
  nodeH: 66,
  gapX: 70, // pidhiyon ke beech
  gapY: 24, // bhai-behno ke beech
  duration: 500,
  minZoom: 0.08,
  maxZoom: 2.5,
};

const nodeFill = (code) => vanshOf(code).fill;
const nodeEdge = (code) => vanshOf(code).dark;

const reduceMotion = () => matchMedia("(prefers-reduced-motion: reduce)").matches;

/**
 * @param {HTMLElement} container
 * @param {Array} people data/log.js ka PEOPLE
 * @param {Object} opts
 *   onNodeClick(id)      node par click
 *   getHighlight()       -> { selId, activeBr }
 *   visibleArea()        -> { left, right, top, bottom }: screen ka woh hissa jo header/panel se dhaka nahi
 *   isMobile()           -> boolean
 */
export function createTree(container, people, { onNodeClick, getHighlight, visibleArea, isMobile }) {
  const { nodeW: rw, nodeH: rh, gapX, gapY } = LAYOUT;
  const dur = () => (reduceMotion() ? 0 : LAYOUT.duration);

  const zoom = d3
    .zoom()
    .scaleExtent([LAYOUT.minZoom, LAYOUT.maxZoom])
    .on("zoom", (e) => g.attr("transform", e.transform));

  const svg = d3
    .select(container)
    .append("svg")
    .attr("width", "100%")
    .attr("height", "100%")
    .attr("role", "img")
    .attr("aria-label", "Vansh-vriksh")
    .call(zoom)
    .on("dblclick.zoom", null);
  const g = svg.append("g");

  const root = d3
    .stratify()
    .id((d) => d.id)
    .parentId((d) => d.parent)(people);
  root.x0 = 0;
  root.y0 = 0;

  const byId = {};
  root.descendants().forEach((n) => (byId[n.data.id] = n));

  const layout = d3.tree().nodeSize([rh + gapY, rw + gapX]);

  // ---- khulna / band hona
  function fold(d) {
    if (d.children) {
      d.children.forEach(fold);
      d._children = d.children;
      d.children = null;
    }
  }
  function unfold(d) {
    if (d._children) {
      d.children = d._children;
      d._children = null;
    }
    if (d.children) d.children.forEach(unfold);
  }
  function openAncestors(n) {
    for (let a = n.parent; a; a = a.parent) {
      if (a._children) {
        a.children = a._children;
        a._children = null;
      }
    }
  }
  root.children.forEach(fold);

  // ---- rekha (link) ka aakaar
  function path(s, d) {
    const m = (s.y + d.y) / 2;
    return `M${s.y} ${s.x}C${m} ${s.x},${m} ${d.x},${d.y} ${d.x}`;
  }

  // ---- highlight: chuna hua node, uska vansh-marg, aur chuna hua vansh
  function applyHighlight() {
    const { selId, activeBr } = getHighlight();
    const lineage = {};
    for (let c = selId && byId[selId]; c; c = c.parent) lineage[c.data.id] = 1;
    g.selectAll("g.node")
      .classed("sel", (d) => d.data.id === selId)
      .classed("in-lin", (d) => !!lineage[d.data.id] && d.data.id !== selId)
      .classed("node-dim", (d) => (activeBr ? d.data.vansh !== activeBr : false));
    g.selectAll("path.link")
      .classed("lin", (d) => !!lineage[d.data.id])
      .classed("link-dim", (d) => (activeBr ? d.data.vansh !== activeBr : false));
  }

  function update(src = root) {
    const t = dur();
    layout(root);
    const nodes = root.descendants();
    const links = nodes.slice(1);
    nodes.forEach((d) => (d.y = d.depth * (rw + gapX)));

    const n = g.selectAll("g.node").data(nodes, (d) => d.id);
    const ne = n
      .enter()
      .append("g")
      .attr("class", "node")
      .attr("transform", `translate(${src.y0},${src.x0})`)
      .on("click", click);

    ne.append("rect")
      .attr("width", rw)
      .attr("height", rh)
      .attr("y", -rh / 2)
      .attr("rx", 14)
      .style("fill", (d) => nodeFill(d.data.vansh))
      .style("stroke", (d) => nodeEdge(d.data.vansh))
      .style("stroke-width", 2);
    ne.append("text")
      .attr("class", "n-name")
      .attr("x", rw / 2)
      .attr("y", -8)
      .attr("text-anchor", "middle")
      .text((d) => cut(d.data.name, 26));
    ne.append("text")
      .attr("class", "n-sub")
      .attr("x", rw / 2)
      .attr("y", 15)
      .attr("text-anchor", "middle")
      .text((d) => cut(cardLine(d.data), 36));
    ne.append("title").text((d) => d.data.name + (cardLine(d.data) ? " - " + cardLine(d.data) : ""));
    ne.append("circle")
      .attr("cx", rw)
      .attr("r", 7)
      .style("stroke-width", 2)
      .style("stroke", (d) => nodeEdge(d.data.vansh));

    const nu = ne.merge(n);
    nu.transition().duration(t).attr("transform", (d) => `translate(${d.y},${d.x})`);
    nu.select("circle")
      .style("fill", (d) => (d._children ? nodeEdge(d.data.vansh) : "var(--canvas)"))
      .style("display", (d) => (d.children || d._children ? null : "none"));
    n.exit().transition().duration(t).attr("transform", `translate(${src.y},${src.x})`).remove();

    const l = g.selectAll("path.link").data(links, (d) => d.id);
    const le = l
      .enter()
      .insert("path", "g")
      .attr("class", "link")
      .style("stroke", (d) => accent(d.data.vansh))
      .attr("d", () => {
        const o = { x: src.x0, y: src.y0 + rw };
        return path(o, o);
      });
    le.merge(l)
      .transition()
      .duration(t)
      .attr("d", (d) => path({ x: d.parent.x, y: d.parent.y + rw }, d));
    l.exit()
      .transition()
      .duration(t)
      .attr("d", () => {
        const o = { x: src.x, y: src.y + rw };
        return path(o, o);
      })
      .remove();

    nodes.forEach((d) => {
      d.x0 = d.x;
      d.y0 = d.y;
    });
    applyHighlight();
  }

  function click(e, d) {
    if (d.children) {
      d._children = d.children;
      d.children = null;
    } else if (d._children) {
      d.children = d._children;
      d._children = null;
    }
    update(d);
    onNodeClick(d.data.id);
  }

  // ---- camera
  function moveTo(tx, ty, k, ms) {
    svg
      .transition()
      .duration(reduceMotion() ? 0 : ms)
      .call(zoom.transform, d3.zoomIdentity.translate(tx, ty).scale(k));
  }

  // Shuruaati view: Brahma ji baayin taraf, dikhne wale hisse ke beech me
  // Mobile par zoom itna ki Brahma ji aur unke bachchon ka column, dono poore dikhein
  function home() {
    const a = visibleArea();
    const k = isMobile() ? Math.min(0.75, Math.max(0.45, (innerWidth - 24) / (2 * rw + gapX))) : 0.7;
    svg.call(zoom.transform, d3.zoomIdentity.translate(isMobile() ? 12 : 60, (a.top + a.bottom) / 2).scale(k));
  }

  // Node ko dikhne wale hisse ke beech me laana, phir blink
  function centerOn(id) {
    const n = byId[id];
    if (!n) return;
    setTimeout(() => {
      const a = visibleArea();
      const k = 0.9;
      moveTo((a.left + a.right) / 2 - (n.y + rw / 2) * k, (a.top + a.bottom) / 2 - n.x * k, k, 700);
    }, LAYOUT.duration);
    setTimeout(() => {
      const el = g.selectAll("g.node").filter((d) => d.data.id === id);
      el.classed("blink", true);
      setTimeout(() => el.classed("blink", false), 3800);
    }, 1250);
  }

  // Poore vansh ko screen me fit karna
  function fitBranch(br) {
    const ns = root.descendants().filter((d) => d.data.vansh === br);
    if (!ns.length) return;
    const x0 = d3.min(ns, (d) => d.x) - rh;
    const x1 = d3.max(ns, (d) => d.x) + rh;
    const y0 = d3.min(ns, (d) => d.y);
    const y1 = d3.max(ns, (d) => d.y) + rw;
    const a = visibleArea();
    const w = a.right - a.left - 40;
    const h = a.bottom - a.top - 40;
    const k = Math.min(1, Math.max(LAYOUT.minZoom, Math.min(w / (y1 - y0), h / (x1 - x0))));
    moveTo((a.left + a.right) / 2 - (k * (y0 + y1)) / 2, (a.top + a.bottom) / 2 - (k * (x0 + x1)) / 2, k, 800);
  }

  return {
    byId,
    update,
    home,
    centerOn,
    fitBranch,
    refreshHighlight: applyHighlight,
    reveal(id) {
      if (byId[id]) openAncestors(byId[id]);
    },
    revealBranch(br) {
      people.forEach((p) => p.vansh === br && openAncestors(byId[p.id]));
    },
    expandAll() {
      root.children.forEach(unfold);
    },
    collapseAll() {
      root.children.forEach(fold);
    },
  };
}
