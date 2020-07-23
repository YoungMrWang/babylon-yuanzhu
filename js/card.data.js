var getUrl = function (num) {
   return "img/card" + num + ".png";
}

var getActiveUrl = function (num) {
   return "img/card" + num + "-a.png";
}

var getCardData = function () {
   return {
      card0: {
         url: getUrl(0),
         aurl: getActiveUrl(0),
         angle: 0.35,
         y: 3
      },
      card1: {
         url: getUrl(1),
         aurl: getActiveUrl(1),
         angle: -0.2,
         y: 2.1
      },
      card2: {
         url: getUrl(2),
         aurl: getActiveUrl(2),
         angle: -0.4,
         y: -1
      },
      card3: {
         url: getUrl(3),
         aurl: getActiveUrl(3),
         angle: -0.62,
         y: 1.6
      },
      card4: {
         url: getUrl(4),
         aurl: getActiveUrl(4),
         angle: -0.9,
         y: 1.4
      },
      card5: {
         url: getUrl(5),
         aurl: getActiveUrl(5),
         angle: -1.16,
         y: 0
      },
      card6: {
         url: getUrl(6),
         aurl: getActiveUrl(6),
         angle: -1.8,
         y: 3
      },
      card7: {
         url: getUrl(7),
         aurl: getActiveUrl(7),
         angle: -2.1,
         y: -1
      },
      card8: {
         url: getUrl(8),
         aurl: getActiveUrl(8),
         angle: -2.34,
         y: -0.2
      },
      card9: {
         url: getUrl(9),
         aurl: getActiveUrl(9),
         angle: -2.6,
         y: 1
      },
      card10: {
         url: getUrl(10),
         aurl: getActiveUrl(10),
         angle: -2.9,
         y: 3
      },
      card11: {
         url: getUrl(11),
         aurl: getActiveUrl(11),
         angle: -3,
         y: -0.5
      },
      card12: {
         url: getUrl(12),
         aurl: getActiveUrl(12),
         angle: -3.3,
         y: 0.7
      },
      card13: {
         url: getUrl(13),
         aurl: getActiveUrl(13),
         angle: -3.6,
         y: 1
      },
      card14: {
         url: getUrl(14),
         aurl: getActiveUrl(14),
         angle: -3.9,
         y: 0
      },
      card15: {
         url: getUrl(15),
         aurl: getActiveUrl(15),
         angle: -4.2,
         y: 0.5
      },
      card16: {
         url: getUrl(16),
         aurl: getActiveUrl(16),
         angle: -4.5,
         y: 1
      },
      card17: {
         url: getUrl(17),
         aurl: getActiveUrl(17),
         angle: -4.9,
         y: 0.6
      },
      card18: {
         url: getUrl(18),
         aurl: getActiveUrl(18),
         angle: -5.3,
         y: 1
      },
      card19: {
         url: getUrl(19),
         aurl: getActiveUrl(19),
         angle: -5.6,
         y: 0
      },
   }
}