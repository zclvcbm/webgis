  //点查询
     var temp_str;
     require([
      "esri/IdentityManager",
      "esri/layers/FeatureLayer",
      "esri/dijit/FeatureTable",
      "dojo/dom-construct",
      "dojo/dom",
      "dojo/parser",
      "dojo/ready",
      "dojo/on",
      "dojo/_base/lang",
      "dijit/registry",
      "esri/dijit/OverviewMap", "esri/dijit/Scalebar", "esri/tasks/query", "esri/tasks/QueryTask", "dojo/domReady!"
    ], function (
      IdentityManager, FeatureLayer, FeatureTable,
      domConstruct, dom, parser, ready, on, lang,
      registry, OverviewMap, Scalebar, Query, QueryTask
    ) {


        parser.parse();


        ready(function () {

            //显示地图控件
           // ShowMapWideget();
             var overviewMapDijit = new OverviewMap({
              //设置鹰眼控件的地图
              map: map,  attachTo: "bottom-right",
              //设置是否可见
              visible: true,
          });
          overviewMapDijit.startup();
              //鹰眼控件放置的位置
            
          //添加比例尺   
          var scalebar = new Scalebar({
              map: map,
              //比例尺单位
              scalebarUnit: "dual",
              //放置的位置
              attachTo: "bottom-left"
          });
            // Create the feature layer
            var myFeatureLayer = new FeatureLayer("http://172.25.11.216:6080/arcgis/rest/services/samples_xt_wgs84/FeatureServer/0", {
                mode: FeatureLayer.MODE_ONDEMAND,
                outFields: ["town", "tu_pb", "tu_cd", "tu_as", "tu_hg"],
                visible: true,
                id: "fLayer"
            });
            myTable = new FeatureTable({
                "featureLayer": myFeatureLayer,
                "hiddenFields": ["FID", "C_Seq", "Street"]  // field that end-user can show, but is hidden on startup
            }, 'myTableNode');
            myTable.startup();
            map.addLayer(myFeatureLayer);
            myFeatureLayer.on("click", execute);

            var queryTask1 = new QueryTask("http://172.25.11.216:6080/arcgis/rest/services/samples_xt_wgs84/MapServer/0");
            //  alert("执行到了这条1");
            var query1 = new Query();
            //   alert("执行到了这条2");
            query1.returnGeometry = false;
            query1.outFields = ["*"];

            //on(dom.byId("execute"), "click", execute);

            //   map.on("click", addPoint);

            function addPoint(evt) {
                var latitude = evt.mapPoint.getLatitude();
                var longitude = evt.mapPoint.getLongitude();
                map.infoWindow.setTitle("Coordinates");
                map.infoWindow.setContent("lat/lon : " + latitude.toFixed(2) + ", " + longitude.toFixed(2) +
              "<br>screen x/y : " + evt.screenPoint.x + ", " + evt.screenPoint.y
            );
                map.infoWindow.show(evt.mapPoint, map.getInfoWindowAnchor(evt.screenPoint));
            }
            function execute(evt) {
                //   alert("FL被点击");
                graphicAttributes = evt.graphic.attributes;
                // relatedQuery.objectIds = ;
                var temstr = [graphicAttributes.OBJECTID]
                // query1.text =temstr.toString() ;
                query1.where = "OBJECTID=" + temstr.toString();
                //  alert(query1.where);

                var pointContent = queryTask1.execute(query1, showResults);
                // alert("想传回来的point"+temp_str);
                map.infoWindow.setTitle("属性");
                map.infoWindow.setContent(temp_str);
                map.infoWindow.show(evt.mapPoint, map.getInfoWindowAnchor(evt.screenPoint));

            }

            function showResults(results) {
                var resultItems = [];
                var resultCount = results.features.length;
                for (var i = 0; i < resultCount; i++) {
                    var featureAttributes = results.features[i].attributes;
                    for (var attr in featureAttributes) {
                        resultItems.push("<b>" + attr + ":</b>  " + featureAttributes[attr] + "<br>");
                    }
                    resultItems.push("<br>");
                }
                temp_str = resultItems.join("");


                //dom.byId("info").innerHTML = resultItems.join("");
                // alert(dom.byId("info").innerHTML );

            }


        });

    });