$(function () {
  // --- Initialize sample trees
  $("#tree1").fancytree({
    extensions: ["glyph"],
    glyph: {
      preset: "awesome4",
      map: {}
    },
    checkbox: "radio",
    selectMode: 1,
    // tooltip: true,
    // tooltip: function(event, data) { return data.node.title + "!"},
    source: [
      {
        title: "n1 (checkbox: false)", expanded: true, checkbox: false, children: [
          { title: "n1.1" },
          { title: "n1.2 (selected)", selected: true },
          { title: "n1.3" }
        ]
      },
      {
        title: "n2", expanded: true, checkbox: false, children: [
          { title: "n2.1" },
          { title: "n2.2" },
          { title: "n2.3" }
        ]
      }
    ],
    init: function (event, data) {
      // Set key from first part of title (just for this demo output)
      data.tree.visit(function (n) {
        n.key = n.title.split(" ")[0];
      });
    },
    activate: function (event, data) {
      $("#echoActive1").text(data.node.title);
    },
    select: function (event, data) {
      // Display list of selected nodes
      var s = data.tree.getSelectedNodes().join(", ");
      $("#echoSelection1").text(s);
    }
  });
});