﻿var DemoDescription = {};
//地图
DemoDescription['4326Map'] = {title: '经纬度投影', desc: '定义：此范例展示经纬度投影的word地图。', oper: '通过鼠标在地图上移动，地图右下角显示经纬度。' }
DemoDescription['3857Map'] = {title: '墨卡托投影', desc: '定义：TiledDynamicRESTLayer 就是用于显示 SuperMap iServer 8C 服务提供的基于 REST 类型的地图服务的一种分块动态图层；分块动态图层(TiledDynamicLayer)：将一个完整的地图切割成多个相同大小的正方形块图片，地图就是由这些块图片拼合而成最终呈现的。之所以称之为动态图层，是因为这些正方形图块是即时生成，而非事先切好。分块动态图层是 SuperMap 特有的图层类型，它特别适用于需要实时更新的数据的显示，例如动态监控交通流量。实际上交通流量是拥有大量车辆分布的点图层，随着车流的变化，点分布也在不断更新，通过动态分块图层便能够十分方便、流程的显示实时数据。', oper: '通过鼠标在地图上移动，地图右下角显示坐标信息。' }
DemoDescription['changchunMap'] = {title: '平面坐标系图层', desc: '定义：此范例展示平面坐标系的长春市地图。', oper: '通过鼠标在地图上移动，地图右下角显示平面坐标。' }
DemoDescription['cloudLayer'] = {title: 'SuperMap 云图层', desc: '定义：通过向 SuperMap 云服务器发送请求得到 SuperMap 云服务发布的图层。', oper: '无' }
DemoDescription['image'] = {title: 'Image图层', desc: '定义：此图层用于显示单一的图片，可以将用户设置的图片同其他图层一起叠加， 实现同步放大、缩小、平移等效果。', oper: '无' }
DemoDescription['overlayLayer'] = {title: '图层叠加', desc: '定义：按对应比例将世界地图与津京唐地图相叠加。', oper: '输入0~1之前的数字调节上面图层的透明度。' }
DemoDescription['dynamiclayers'] = {title: '动态图层', desc: '定义：此图层用于展示动态图层。', oper: '无' }


DemoDescription['tianditu'] = {title: '天地图图层', desc: '使用天地图的API创建地图，通过iConnector叠加iserver生成的点密度专题图', oper: '点击左上角的按钮可以叠加全球点密度专题图，并且可以转换地图的投影系。' }
DemoDescription['google'] = {title: 'Google图层', desc: '使用Google的API创建Google地图，通过iConnector叠加iserver生成的的分段专题图', oper: '点击左上角的按钮可以叠加中国各省面积分段专题图。' }
DemoDescription['arcGIS93Rest']={title:'ArcGIS图层',desc:'使用ArcGIS的API创建地图，通过iConnector叠加iServer生成的单值专题图', oper: '点击左上角的按钮可以叠加全国各省面积单值专题图。' }
DemoDescription['baidu'] = {title: 'Baidu图层', desc: '使用Baidu的API创建百度地图，通过iConnector叠加iserver生成的等级符号专题图', oper: '点击左上角的按钮可以叠加中国各省面积等级符号专题图。' }
DemoDescription['aMap'] = {title: 'AMap图层', desc: '使用AMap的API创建高德地图，通过iConnector叠加iserver生成的点密度专题图', oper: '点击左上角的按钮可以叠加全球点密度专题图。' }

DemoDescription['leaflet']={title:'LeafLet图层',desc:'使用Leaflet的API创建OpenStreetMap地图，通过iConnector叠加iServer生成的点密度专题图', oper: '点击左上角的按钮可以叠加点密度专题图。' }
DemoDescription['mapBox']={title:'MapBox图层',desc:'使用MapBox的API创建OpenStreetMap地图，通过iConnector叠加iServer生成的点密度专题图。支持IE10以上版本。mapbox.js是基于leaflet开发的，iConnector原理一样。', oper: '点击左上角的按钮可以叠加点密度专题图。' }
DemoDescription['cartoDB']={title:'CartoDB图层',desc:'使用CartoDB的API创建OpenStreetMap地图，通过iConnector叠加iServer生成的点密度专题图。cartoDB是基于leaflet开发的，iConnector原理一样', oper: '点击左上角的按钮可以叠加点密度专题图。' }
DemoDescription['polymap']={title:'Polymaps图层',desc:'使用Polymaps的API创建地图，通过iConnector叠加iServer生成的点密度专题图。支持IE9以上版本', oper: '点击左上角的按钮可以叠加点密度专题图。' }
DemoDescription['openLayers3']={title:'OpenLayers3',desc:'使用OpenLayers3创建OSM地图，通过iConnector叠加iServer生成的单值专题图。', oper: '点击左上角的按钮可以叠加单值专题图。' }
DemoDescription['bing']={title:'bing图层',desc:'使用bing地图的API创建bing地图,通过iConnector叠加iserver生成的等级符号专题图', oper: '点击左上角的按钮可以叠加单值专题图。' }

DemoDescription['3tianditu'] = {title: '天地图图层', desc: '使用天地图的API创建图层，并添加到map上', oper: '点击图标，弹出图片框。' }
DemoDescription['3baidu'] = {title: '百度图层', desc: '使用百度的API创建图层，并添加到map上', oper: '若为无覆盖物状态，点击加载数据，若为有覆盖物状态，可点击清除。' }
DemoDescription['3Siweidg']={title:'四维图新图层',desc:'使用四维图新的API创建图层，并添加到map上', oper: '点击绘制（点、线、面）按钮，可进行绘制编辑。' }

DemoDescription['translation'] = {title: '缩放平移', desc: '定义：此范例展示放大、缩小、平移接口，即不通过地图控件对地图进行缩放平移操作。', oper: '通过点击放大，缩小，平移按钮进行操作。' }
DemoDescription['zoomRange'] = {title: '设置缩放级别', desc: '定义：此范例展示设置地图的缩放级别，初始化时地图的缩放级别为0,缩放级别的数量为5。', oper: '通过鼠标滑动放大缩小。' }
DemoDescription['coordinate_transformation'] = {title: '坐标转换', desc: '定义：此范例展示像素坐标与地理坐标之间的转换。', oper: '通过鼠标点击地图。' }
DemoDescription['mapevent'] = {title: '地图事件', desc: '定义：此范例展示地图的click事件。', oper: '通过鼠标点击地图。' }
DemoDescription['toggleMaps'] = {title:'底图切换',desc:'两张底图（基础图层）切换显示。切换显示世界地图_Day和世界地图_Night。',oper:'点击"底图切换"按钮，切换显示世界地图_Night和世界地图_Day。'}

//覆盖物
DemoDescription['basicalGeometry'] = {title: '基础矢量图形', desc: '此范例显示基础矢量图形，如：点，线，矩形，贝塞尔曲线，多边形，圆。', oper: '点击 “加载数据” 按钮，显示vector图层上的基础矢量图形；点击 “移除数据” 按钮，清除vector图层上的所有矢量图形。初始化时数据已加载。' }
DemoDescription['basicalGeometry_label'] = {title: '带标签的矢量图层', desc: '此范例显示基础矢量图形加标签', oper: '点击 “加载数据” 按钮，显示vector图层上的基础矢量图形；点击 “移除数据” 按钮，清除vector图层上的所有矢量图形。初始化时数据已加载。' }
DemoDescription['geometryGradient'] = {title: '渐变色样式的矢量图形', desc: '此范例显示使用渐变色的矢量图形', oper: '点击 “加载数据” 按钮，显示vector图层上的带渐变色样式的矢量图形；点击 “移除数据” 按钮，清除vector图层上的所有矢量图形。初始化时数据已加载。' }
DemoDescription['vectorEvent'] = {title: '矢量图层事件', desc: '此范例展示矢量图层支持的简单的事件，添加了selectFeature控件中的click事件，弹出一个简单的信息框。', oper: '点击“加载数据” 按钮，加载数据后点击点对象，触发事件，弹出简单信息框。' }
DemoDescription['createBLine'] = {title: 'B样条曲线', desc: 'B样条曲线是由一组控制点得到的一条曲线，此曲线会穿过所有的点。。', oper: '点击“绘制点集”按钮，在地图上绘制点，再点击“根据点击生成B样条曲线”按钮，生成B样条曲线。' }
DemoDescription['chinaTelecomSymbol'] = {title: '电信符号', desc: '此范例展示三叶草渲染。两层的三叶草深色可以代表GSM900共站，下面浅色代表1800共站。三层三叶草一层可以代表频点α，二层可代表频点β，三层课代表频点γ。', oper: '点击“显示符号”按钮，电信专业符号被加载到地图。1、三叶草节点数有10万个；2、三叶草颜色可以在前台制定，前后台可交互；3、三叶草有多类型多频点，方向角可不同；4、三叶草可以被选中，支持选择后弹出对话框；5、可以通过连线看到有哪些临区。'}
DemoDescription['mRegion'] = {title: '岛洞与多面', desc: '此范例展示了岛洞多边形和多面的创建方式以及效果。', oper: '点击加载数据添加岛洞多边形和多面，点击移除数据可移除岛洞多边形和多面'}
DemoDescription['marker'] = {title: '标记图层', desc: '标记覆盖物，对地图的点进行标注，可以自定义选择标注的图标，需添加到 Markers 图层上显示。', oper: '无'}
DemoDescription['markerEvent'] = {title: '标记图层事件', desc: '此范例展示标记图层支持的简单的事件，在marker上添加click事件（移动端浏览器则注册touchstart事件），弹出一个简单的信息框。', oper: '点击marker图标，触发事件，弹出简单信息框。' }

 //控件
DemoDescription['zoom'] = {title: '缩放控件', desc: '定义：此范例展示仅由“加号”按钮和“减号”按钮组成的缩放控件。 缩放控件用于缩放地图，默认垂直显示在地图的左上角。', oper: '单击“加号”按钮对地图放大一级，单击“减号”按钮对地图缩小一级。' }
DemoDescription['panzoombar'] = {title: '平移缩放控件', desc: '定义：此范例展示由罗盘、滑动条、“加号”按钮和“减号”按钮组成的平移缩放控件。 用于平移缩放地图，默认垂直显示在地图的左上角。', oper: '单击加号对地图放大一级，单击减号对地图缩放一级，拖动滑动条或滑动滚轮改变显示级别。点击罗盘的上下左右键漫游地图，中间键显示全幅地图。' }
DemoDescription['zoomBox'] = {title: '拉框缩放控件', desc: '定义：拉框缩放控件，通过在地图上绘制矩形区域进而缩放地图。缩放只发生在按住键盘某个键的同时拖拽鼠标绘制矩形区域，键盘上的这个键可通过属性改变，默认为Shift键。', oper: '按住键盘的Shift键同时拖拽鼠标绘制矩形区域。' }
DemoDescription['navigation'] = {title: '地图基础操作控件', desc: '定义：此范例展示此控件处理伴随鼠标事件（拖拽，双击、鼠标滚轮缩放）的地图浏览， 如果创建地图时没有设置任何控件，此控件会默认添加到地图。', oper: '使用鼠标可以拖拽地图图层，并且可以移动到地图外。双击左键放大地图，双击右键缩小地图。在点击左键同时按下Alt可绘制缩放框进行地图放大。滑动鼠标滚轮可缩放地图。' }
DemoDescription['layerswitcher'] = {title: '图层管理器', desc: '定义：图层管理器，用于控制地图中的图层可见性。', oper: '鼠标移动至右上角LayerSwitcher控件上,选择显示或不显示图层。' }
DemoDescription['overviewmap'] = {title: '鹰眼控件', desc: '定义：此范例展示鹰眼图控件，用于控制地图中的鹰眼。', oper: '点击表示鹰眼的图标可以显示和隐藏鹰眼。改变地图显示级别时，鹰眼范围矩形边框随之改变。当拖拽标记范围时，鹰眼中的地图会自动更新，标记范围重返中心位置。' }
DemoDescription['scaleline'] = {title: '比例尺控件', desc: '定义：此范例展示比例尺控件，默认位置为地图左下角。', oper: '随缩放比例改变。' }
DemoDescription['attribution'] = {title: '版权控件', desc: '定义：此范例展示将各图层的“attribution”属性显示到地图上，位于地图右下角。', oper: '点击链接图层对应的attribution。' }
DemoDescription['dragpan'] = {title: '地图拖拽控件', desc: '定义：此范例展示可通过鼠标拖拽的方式平移地图。通过使用activate和deactivate实现动态的激活和注销。', oper: '点击“拖曳地图”后可以用鼠标拖曳地图，点击“取消拖曳”后地图不能被拖曳。' }
DemoDescription['geolocate'] = {title: '地理定位控件', desc: '地理定位控件包装了w3c 的geolocation 接口，Geolocation API标准定义了获取相关设备所提供的地理位置信息的编程接口，这些位置信息的常见来源包括全球定位系统（GPS），以及通过诸如IP地址、RFID、WiFi和蓝牙的MAC地址、和GSM/CDMA手机ID的网络信号所做的推断。该范例与map结合使用；在位置改变时可以响应事件。', oper: '在发布状态下，点击“定位”定位你所在的位置。不支持Firefox和Chrome' }
DemoDescription['changeControlsSkin'] = {title: '控件皮肤切换', desc: '定义: 此范例展示缩放控件、图层管理器、鹰眼控件的Skin切换。', oper: '点击切换按钮。'}

DemoDescription['drawGeometry'] = {title: '点线面绘制', desc: '此范例展示绘制点线面，主要运用DrawFeature。', oper: '点击“绘点，绘线，绘面”按钮，对要素进行绘制。'}
DemoDescription['featureSnap'] = {title: '要素编辑', desc: '此范例展示捕捉类和控件ModifyFeature进行要素编辑和捕捉,默认开启捕捉。当开启捕捉，然后进行要素编辑的时候，鼠标移动到其他要素附近时，将会捕捉到相应的要素，然后将编辑的点绘制到这个要素上的效果，关闭捕捉则没有此效果。',oper:'点击地图上的要素，即可开始编辑，这时可以对要素的节点进行拖拽编辑，点击“开启捕捉”或者“关闭捕捉”来开启与关闭捕捉。'}
DemoDescription['distanceMeasure'] = {title: '距离量算', desc: '距离量算，设置MeasureService 的属性 measureMode为枚举值SuperMap.REST.MeasureMode.DISTANCE，量算当前线的距离，单位为米。', oper: '点击 “距离量算” 按钮，在地图中绘制线要素（点击鼠标添加节点，双击结束绘制），显示距离量算结果；点击 “清除” 按钮，清除当前的线要素。' }
DemoDescription['areaMeasure'] = {title: '面积量算', desc: '面积量算，设置 MeasureService 的属性 measureMode 为枚举值 SuperMap.REST.MeasureMode.AREA，量算当前多边形的面积，单位为平方米。', oper: '点击 “面积量算” 按钮，在地图中绘制面要素（点击鼠标添加节点，双击结束绘制），显示面积量算结果；点击 “清除” 按钮，清除当前的面要素。' }
DemoDescription['dragFeature'] = {title: '拖拽要素控件', desc: '定义：鼠标拖拽要素控件，通过鼠标拖拽要素进而移动要素。', oper: '点击“拖拽要素”按钮，在地图上拖拽点、线、面要素。“取消拖拽”后注销控件，地图上的点、线、面要素不能被拖曳。' }

//信息框
DemoDescription['simplePopup'] = {title: '简易信息框', desc: '定义：弹窗控件，可在单独窗口中相对于屏幕上的元素或点显示内容。', oper: '关闭弹窗后，点击标记物弹窗出现，位置不会改变。' }
DemoDescription['anchored'] = {title: '自适应信息框', desc: '定义：自适应信息框。固定锚点位置的的浮动弹窗，可以围绕指定位置四周自适应显示。', oper: '缩放地图，信息框会在固定位置的四个方位自适应移动显示，关闭信息框后，点击标记物，信息框会选择适当方位再显示。' }
DemoDescription['popup'] = {title: '自定义信息框', desc: '定义：弹窗控件，可在单独窗口中相对于屏幕上的元素或点显示内容。', oper: '点击标记物，显示弹窗。设置弹窗背景颜色，按“设置背景色”修改弹窗背景颜色。设置弹窗透明度，按“修改透明度”改变其透明度。' }
DemoDescription['shadowPopup'] = {title: '常用信息框', desc: '定义：具有指向和边框的浮动弹窗，可在单独窗口中相对于屏幕上的元素或点显示内容。', oper: '点击标记物，显示弹窗。' }

//查询
DemoDescription['queryByBounds'] = {title: '范围查询', desc: '定义：对地图图层的 Bounds 查询，在一个或多个指定的图层上查询指定 Bounds 范围内的空间地物信息。Bounds 查询与 Geometry 查询相似，不同的是，Bounds 查询指定的范围为 Bounds，非 Geometry 信息，且使用起来较 Geometry 查询更加方便快捷。', oper: '1、点击 “查询” 按钮，在地图中点击鼠标，然后拖动鼠标，最后释放鼠标，完成添加矩形（指定的Bounds），查询并显示矩形区域内的首都；2、点击 “清除” 按钮，清除当前的查询结果。' }
DemoDescription['queryByDistance'] = {title: '距离查询', desc: '定义：对地图图层的距离查询，就是查询距离几何对象一定范围内符合指定条件的地物。对于点几何对象，则查询以该点为圆心，距离为半径的圆内地物；对于线和面几何对象，则查询距 离对像边界上一定范围内的地物。例如，查询长春市人民广场小学方圆 200 米范围内的公交站台。查询距离的单位为地图单位。距离查询时可以通过距离查询参数中 isNearest 参数设置是否查找最近的地物，同时通过 expectCount 参数设置要查找的最近的地物个数。如果不设置 expectCount，则会查找出所有满足条件的地物。查找最近地物时，距离容限值 distance 无效。', oper: '1、地图中标识图标表示上海（用于查询的几何对象）；2、点击 “查询” 按钮，查询并显示距离上海 30 地图单位内的首都；3、点击 “清除” 按钮，清除当前的查询结果。' }
DemoDescription['queryByGeometry'] = {title: '几何查询', desc: '定义：对地图图层的几何查询，就是查询与指定几何对象符合某种空间关系和查询条件的地物。如果您想知道在奥运场馆周围 5 公里内有多少家酒店，那么您可以把奥运场馆的 5 公里 Buffer 作为搜索对象，用 Containing 去查询酒店所在的图层，就可以方便快速地得到想要的结果了。点、线、面空间几何对象都有明确的边界矩形、边界、内部和外部。几何对象的空间位置关系比较，实质上就是对相互间边界矩形、边界、内部和外部关系的比较。', oper: '1、点击 “点/线/矩形/圆/多边形” 按钮，在地图中添加相应的几何图形，查询并显示结果（点/线所在的国家，矩形/圆/多边形区域内的首都）；2、点击 “清除” 按钮，清除当前的查询结果。' }
DemoDescription['queryBySQL'] = {title: 'SQL 查询', desc: '定义：对地图的 SQL 查询，即在指定地图图层中查询符合 SQL 条件的地物。空间数据的查询和分析在 GIS 工程项目中处于核心地位，在使用 GIS 数据时，我们经常需要从已有的数据中查询出部分满足特定条件的数据。GIS 中的查询类型一般可以分为以下三种：单纯的属性查询、单纯的空间查询、以及与空间位置和属性同时相关的综合查询。SQL 查询是指查询的条件只与空间地物的属性相关，而与地物的地理位置无关的查询。这一类的查询通常有“中国人口大于 5000 万的省（直辖市、自治区）有哪些？”、“河北省粮食产量超 100 万的县有哪些？”、“江苏省面积大于 100 平方千米的湖泊有哪些？”、“北京市三星级以上的宾馆有哪些？”等等。', oper: '1、点击 “查询” 按钮，执行 SQL 查询（查询条件为：人口在 100 千万以上，并且面积在 900 万平方公里以上的国家）；2、点击 “清除” 按钮，清除当前的查询结果。' }
DemoDescription['vectorLayerRegionName'] = {title: '查询交互', desc: '定义：对地图的 SQL 查询，通过使用高性能的vector渲染器（canvas2）绘制大量的矢量地物。', oper: '1、点击 “查询” 按钮，查询中国1w个县城、所有的市、所有的省会并对其进行绘制；2、点击 “清除全部” 按钮，清除当前的查询结果；3、点击 “清除1000个” 按钮，按添加顺序清除前1000个查询结果；4、点击 “清除选择” 按钮，可以删除当前选择的地物；5、点击 “启动编辑” 按钮，可以启动对地物编辑的功能；6、点击 “关闭编辑” 按钮，在已经启动编辑功能的前提下，可以关闭编辑功能。' }
DemoDescription['getFeatureByIDs'] = {title: 'ID 查询', desc: '定义：数据集IDs查询，即在数据集中查询符合指定ID的地理空间要素。', oper: '1、点击 “查询” 按钮，执行IDs数据集查询，查询数据集["World:Countries"]中ID为[1,247]的空间要素（ID号对应的国家）；2、点击 “清除” 按钮，清除当前的查询结果。' }
DemoDescription['getFeatureByGeometry'] = {title: '几何查询', desc: '定义：查询与指定几何对象符合一定空间关系的矢量要素。空间关系包含CONTAIN（包含）、CROSS（交叉）、DISJOINT（分离）、IDENTITY（重合）、INTERSECT（相交）、NONE（无空间关系）、OVERLAP（叠加）、TOUCH（邻接）、WITHIN（被包含），本示例使用“相交”模式：SuperMap.REST.SpatialQueryMode.INTERSECT。', oper: '1、点击 “查询” 按钮，在地图中添加几何要素（鼠标单击添加结点，双击结束，其中点集合的长度必须大于3），2、查询与所绘制的几何要素有交集的国家；3、点击 “清除” 按钮，清除当前的查询结果。' }
DemoDescription['getFeatureByBuffer'] = {title: '缓冲区查询', desc: '定义：对指定的几何对象进行一定距离缓冲，从指定数据集集合中查询出与缓冲区区域相交的矢量数据。', oper: '1、点击要素标绘（点/线/面）按钮，在地图中绘制要素，双击结束绘制要素后即可查询并显示要素标绘（点/线/面）30度区域内的国家首都。2、点击“清除”按钮，即可清除掉显示的查询结果。' }
DemoDescription['getFeatureBySQL'] = {title: 'SQL 查询', desc: '定义：对数据集的 SQL 查询，即在指定数据集集合中查找符合 SQL 条件的矢量要素。', oper: '1、点击 “查询” 按钮，执行 SQL 查询（查询条件为："SMID =247" 的国家）；2、点击 “清除” 按钮，清除当前的查询结果。' }
DemoDescription['getFeatureByBounds'] = {title: '范围查询', desc: '定义：对数据集进行范围查询，即在指定数据集集合中查找与某一个范围相交的矢量要素。', oper: '1、点击 “查询” 按钮，执行范围查询；2、点击 “清除” 按钮，清除当前的查询结果。' }
DemoDescription['editFeature'] = {title: '地物编辑', desc: '定义：数据服务中数据集地物编辑服务类，基于数据集与服务端交互完成地物的添加、选择、删除、修改操作。添加、删除、修改操作共用同一个参数类（EditFeaturesParameters）、同一个服务类（EditFeaturesService）、同一个事件类（EditEvent）、同一个结果类（EditFeaturesResult）。而选择操作拥有其独立的参数、服务、事件、结果类。选择操作的目的是为了获取服务端的几何对象。', oper: '1、点击 “新增地物” 按钮，在地图中添加多边形（鼠标单击添加结点，双击结束）增加地物。2、点击 “选择地物” 按钮在地图中选中地物，注意：执行编辑和删除操作之前都需要先执行选择操作。3、点击“选择地物”按钮在地图中选中要编辑的地物，点击 “编辑地物” 按钮进行编辑。4、先点击“选择地物”按钮在地图中选中要清除的地物，再点击“删除地物”按钮进行地物清除。' }
DemoDescription['fieldStatistic'] = {title: '字段查询统计', desc: '定义：查询指定数据集的中所有属性字段', oper: '1.首先查询数据集中所有属性字段；2.对指定字段统计分析，即求平均值，最大值等' }

 //专题图
DemoDescription['themeDotDensity'] = {title: '点密度专题图', desc: '定义：点密度专题图使用点的个数或密集程度来反映一个区域或范围某一专题数据的值，因此只有面数据才能制作点密度专题图。 点密度专题图的一个点代表了一定数值，则一个区域内点的个数乘以一个点所表示的数值就是此区域对应的专题数据的值。例如指定一个点代表 1000，则若一个区域的人口为 1000000，则该区域点的个数为 1000 个。点密度专题图中点的分布是随机的，并不代表实际的分布位置。即使在相关设置完全相同的情况下，每次制作出的专题图，点的数量相同，但点的位置都有差异。', oper: '1、点击创建专题图按钮生成点密度专题图；2、点击移除专题图按钮移除点密度专题图。' }
DemoDescription['themeGraduatedSymbol'] = {title: '等级符号专题图', desc: '定义：等级符号专题图是采用不同的形状、颜色和大小的符号，表示各自独立的、以整体概念显示的各个物体的数量与质量特征。通常，以符号的形状、颜色和大小反映物体的特定属性；符号的形状与颜色表示质量特征，符号的大小表示数量特征。等级符号专题图多用于具有数量特征的地图上，比如表示不同地区的粮食产量、GDP、人口等的分级，也就是说，用于制作等级符号专题图的专题变量类型为数值型。', oper: '1、对中国各个省的面积大小制作等级符号专题图，基准值为300万平方公里；2、点击 “创建专题图” 按钮，生成等级符号专题图；3、点击 “移除专题图” 按钮，清除当前专题图。' }
DemoDescription['themeGraph'] = {title: '统计专题图', desc: '定义：统计专题图通过为每个要素或记录绘制统计图来反映其对应的专题值的大小。它可同时表示多个字段属性信息，在区域本身与各区域之间形成横向和纵向的对比。统计专题图多用于具有相关数量特征的地图上，比如表示不同地区多年的粮食产量、GDP、人口等，不同时段客运量、地铁流量等。允许一次分析多个数值型变量，即可以将多个变量的值绘制在一个统计图上。', oper: '1、该范例是展示将京津地区 1992--1999 年的人口增长率制作成统计专题图——柱状图；2、点击 “创建专题图” 按钮，即可看到人口增长率对比的柱状图（其中，蓝色柱体代表 1992-1995 人口增长率，粉色柱体代表 1995-1999 人口增长率;通过对该柱状图的分析，可以得出京津各地区人口增长速度的快慢，从而更好地针对人口问题作出举措）；3、点击 “移除专题图” 按钮，清除当前专题图。' }
DemoDescription['themeLabel'] = {title: '标签专题图', desc: '定义：标签专题图是用文本的形式在图层中显示点、线、面等对象的属性信息，一般将文本型或数值型字段标注于图层中，如地名、道路名称、河流等级、宽度等信息。这里需要注意的是地图上一般还会出现图例说明，图名，比例尺等等，这些都是制图元素，不属于标签专题图标注的范畴。标签专题图有两种表现形式：第一种 统一标签专题图，即将指定图层的表达式的所有值使用统一的风格输出，labelExpression 用于设定标签专题图所使用的字段。第二种 为分段标签专题图。它仍然使用 labelExpression 设定标签专题图显示的字段值，通过 rangeExpression 指定数字型的字段作为分段数据，items 中的每个子对象的 [start，end) 分段值必须来源于属性 rangeExpression 的字段值，并在 items 中为每个或部分分段子项自定义特殊的风格。', oper: '1、该范例展示根据 各国首都名称和人口数量 制作的矩阵标签专题图；2、点击 “创建专题图” 按钮，即可看到各国首都矩阵标签专题图；3、点击 “移除专题图” 按钮，清除当前专题图。' }
DemoDescription['themeRange'] = {title: '范围分段专题图', desc: '定义：范围分段专题图是按照指定的分段方法（如：等距离分段法）对字段的属性值进行分段，使用不同的颜色或符号（线型、填充）表示不同范围段落的属性值在整体上的分布情况，体现区域的差异。在分段专题图中，专题值按照某种分段方式被分成多个范围段，要素根据各自的专题值被分配到其中一个范围段中，在同一个范围段中的要素使用相同的颜色，填充，符号等风格进行显示。分段专题图所基于的专题变量必须为数值型，分段专题图一般用来反映连续分布现象的数量或程度特征，如降水量的分布，土壤侵蚀强度的分布等。', oper: '1、该范例展示根据 中国各省面积 制作的分段专题图（根据各省面积分为三段：其中绿色代表 0~50 万平方公里，黄色代表 50~100 万平方公里，灰蓝色代表 100~300 万平方公里）；2、点击 “创建专题图” 按钮，即可看到各省面积专题图；3、点击 “移除专题图” 按钮，清除当前专题图。' }
DemoDescription['themeGridRange'] = {title: '栅格分段专题图', desc: '栅格分段专题图，是将所有单元格的值按照某种分段方式分成多个范围段，值在同一个范围段中的单元格使用相同的颜色进行显示。栅格分段专题图一般用来反映连续分布现象的数量或程度特征。比如某年的全国降水量分布图，将各气象站点的观测值经过内插之后生成的栅格数据进行分段显示。该类类似于分段专题图类，不同点在于分段专题图的操作对象是矢量数据，而栅格分段专题图的操作对象是栅格数据。', oper: '1、该范例展示根据 京津地形高程图 制作的分段专题图（根据各位置的高程值分为6段，分别对应了不同的颜色）；2、点击 “创建专题图” 按钮，即可看到京津地形高程分段专题图；3、点击 “移除专题图” 按钮，清除当前专题图。' }
DemoDescription['themeUnique'] = {title: '单值专题图', desc: '单值专题图是将专题值相同的要素归为一类，为每一类设定一种渲染风格，如颜色或符号等，专题值相同的要素采用相同的渲染风格，从而用来区分不同的类型。单值专题图的专题变量可以是非数值型的描述性属性，如要素的名称，类型及状态等；也可以是数值型的但用于标识的属性，如要素的唯一标识ID，土地利用类型标识号等；当然，专题变量也可以是数值型的表示量的属性，这时每一个数值的要素会被赋予一种风格，如果数值非常多而且各不相同，不推荐使用此方法制作专题图，因为并不能达到区分数据的作用。单值专题图着重表示现象的质的区别，一般不表示数量的特征，可用于地质图、地貌图、植被图、土地利用图、政治行政区划图、自然区划图、经济区划图等。', oper: '1、该范例展示根据中国行政区划制作的单值专题图；2、点击 “创建专题图” 按钮，即可看到中国行政区划的单值专题图；3、点击 “移除专题图” 按钮，清除当前专题图。' }
DemoDescription['themeGridUnique'] = {title: '栅格单值专题图', desc: '栅格单值专题图，是将单元格值相同的归为一类，为每一类设定一种颜色，从而用来区分不同的类别。', oper: '1、点击"创建专题图"按钮，创建栅格单值专题图；2、点击"移除专题图"按钮，移除栅格单值专题图'}
DemoDescription['themeLabelLayer'] = {title: '标签专题图层', desc: '定义：本范例使用SQL查询capital数据集，然后将世界各国的首都名称通过策略 Strategy.GeoText 渲染在 vector 图层中。示例使用了标签风格分组，按照首都的人口数量进行划分，人口数量多的首都其标签字体越大，颜色越鲜艳。', oper: '点击“添加标签”按钮，将世界各国的首都名称高亮显示在地图上，点击“清除”按钮，清除标签图层。点击标签查看与此首都对应的国家及人口信息。' }
DemoDescription['ctl_landuseUnique'] = {title: '单值专题图', desc: '定义：1.本范例展示客户端单值专题图层的使用方式，将查询获得的数据（数据亦可在客户端构建）在客户端进行单值专题渲染，本专题图反应京津地区土地利用类型的分布情况。2.此范例展示通过事件实现与专题要素的交互。', oper: '点击"添加专题图层"制作专题图; 点击"清除"清空专题图层。' }
DemoDescription['themePM2_5'] = {title: '空气质量指数(AQI)', desc: '定义：本范例展示了中国大部分城市在2015-03-25-14:00:00的空气质量指数及相关信息。示例使用了客户端标签专题图，将城市的AQI值作为标签的内容，值越大的城市标签字体越大。', oper: '点击"添加专题图层"制作专题图; 点击"清除"清空专题图层。' }
DemoDescription['ctl_popDensityRange'] = {title: '分段专题图', desc: '定义：1.本范例展示客户端分段专题图层的使用方式，将查询获得的数据（数据亦可在客户端构建）在客户端进行分段专题渲染，本专题图反应京津地区人口密度空间特征。2.此范例展示在客户端直接更新数据，重新渲染专题图的方法。3.此范例展示通过事件实现与专题要素的交互。', oper: '点击"添加专题图层"制作专题图; 点击"更新数据"修改数据（随机生成数据值）并重新生成专题图; 点击"清除"清空专题图层。' }
DemoDescription['ctl_worldCapitalsGraphBar'] = {title: '世界首都人口统计', desc: '定义：1.本范例展示客户端统计专题图层的基础使用方式，将查询获得的世界首都人口数据（本范例仅展示人口数 > 100万的首都城市）在客户端进行统计专题图制作。3.此范例展示通过事件实现与专题要素的交互。', oper: '点击"添加专题图"制作专题图; 点击"清除"清空专题图层; 点击图表中的柱条可将此图表关联的地理要素定位到地图中心并显示首都城市人口信息' }
DemoDescription['ctl_GraphBar'] = {title: '柱状图', desc: '定义：1.本范例展示客户端统计专题图-基础柱状图的使用方式，通过柱状图展示 2009 年到 2013 年中国各省级行政区内的居民消费水平（数据来源：国家统计局 http://data.stats.gov.cn/ ）。2.此范例展示通过事件实现与专题要素的交互，显示数据信息。', oper: '点击"添加专题图"制作专题图; 点击"清除"清空专题图层；鼠标移动到图表上可以查看数据信息。' }
DemoDescription['ctl_GraphLine'] = {title: '折线图', desc: '定义：1.本范例展示客户端统计专题图-基础折线图的使用方式，通过折线图展示 2009 年到 2013 年中国各省级行政区内的居民消费水平（数据来源：国家统计局 http://data.stats.gov.cn/ ）。2.此范例展示通过事件实现与专题要素的交互，显示数据信息。', oper: '点击"添加专题图"制作专题图; 点击"清除"清空专题图层；鼠标移动到图表上可以查看数据信息。' }
DemoDescription['ctl_GraphPie'] = {title: '饼图', desc: '定义：1.本范例展示客户端统计专题图-基础饼图的使用方式，通过饼图展示 2009 年到 2013 年中国各省级行政区内的居民消费水平（数据来源：国家统计局 http://data.stats.gov.cn/ ）。2. 范例展示统计图 style 快速切换的方法。3.此范例展示通过事件实现与专题要素的交互，显示数据信息。', oper: '点击"添加专题图"制作专题图;  按钮"高亮填充"、"高亮描边"、"初始样式"可以快速修改图表样式；点击"清除"清空专题图层；鼠标移动到图表上可以查看数据信息。' }
DemoDescription['ctl_GraphBar3D'] = {title: '三维柱状图', desc: '定义：1.本范例展示客户端统计专题图-三维柱状图的使用方式，通过三维柱状图展示 2009 年到 2013 年中国各省级行政区内的居民消费水平（数据来源：国家统计局 http://data.stats.gov.cn/ ）。2.此范例展示通过事件实现与专题要素的交互，显示数据信息。', oper: '点击"添加专题图"制作专题图; 点击"清除"清空专题图层；鼠标移动到图表上可以查看数据信息。' }
DemoDescription['ctl_GraphPoint'] = {title: '点状图', desc: '定义：1.本范例展示客户端统计专题图-点状图的使用方式，通过点状图展示 2009 年到 2013 年中国各省级行政区内的居民消费水平（数据来源：国家统计局 http://data.stats.gov.cn/ ）。2.此范例展示通过事件实现与专题要素的交互，显示数据信息。', oper: '点击"添加专题图"制作专题图; 点击"清除"清空专题图层；鼠标移动到图表上可以查看数据信息。' }
DemoDescription['ctl_GraphRing'] = {title: '环状图', desc: '定义：1.本范例展示客户端统计专题图-环状图的使用方式，通过环状图展示 2009 年到 2013 年中国各省级行政区内的居民消费水平（数据来源：国家统计局 http://data.stats.gov.cn/ ）。2. 范例展示统计图 style 快速切换的方法。3.此范例展示通过事件实现与专题要素的交互，显示数据信息。', oper: '点击"添加专题图"制作专题图;  按钮"高亮填充"、"高亮描边"、"初始样式"可以快速修改图表样式；点击"清除"清空专题图层；鼠标移动到图表上可以查看数据信息。' }
DemoDescription['ctl_jingjinPopGraph'] = {title: '统计图表切换', desc: '定义：1.本范例展示客户端统计图的图表切换功能，客户端统计图设计上采用了“数据驱动”的可视化策略，对同一份数据，可以在同一个专题图层中采用不同的图表类型进行数据展示。', oper: '点击"添加专题图"制作专题图; 按钮"切换为柱状图"、"切换为折线图"、"切换饼图" 可以快速切换图表类型；点击"更新数据"修改数据（注意：此数据是随机生成，不具备参考价值，仅作为图表效果展示使用）并重新生成专题图; 点击"清除"清空专题图层；鼠标移动到图表上可以查看数据信息。' }
DemoDescription['ctl_RankSymbol'] = {title: '等级符号专题图', desc: '定义：1.本范例展示客户端等级符号专题图-基础圆形符号的使用方式，通过圆形符号的大小展示2009年中国各个省级行政区内的居民消费水平（数据来源：国家统计局 http://data.stats.gov.cn/ ）。 2.此范例展示通过事件实现与专题要素的交互，显示数据信息。', oper: '点击"添加专题图"制作专题图; 点击"清除"清空专题图层；鼠标移动到图表上可以查看数据信息。'}

//分析
DemoDescription['bufferAnalyst'] = {title: '缓冲区分析一', desc: '定义：缓冲区分析是 GIS 中基本的空间分析，缓冲区分析实际上是在基本空间要素周围建立具有一定宽度的邻近区域。缓冲区分析多用在，确定道路拓宽的范围，确定放射源影响的范围等方面。缓冲区分析可以应用在点、线和面状地物上，在对线状地物进行缓冲区分析时，可以设置地物的左、右侧缓冲距离，并且可以设置缓冲的端点类型为平头缓冲或者圆头缓冲，当对点和面状地物进行缓冲区分析时，则只需要设置地物的左侧缓冲距离即可，并且缓冲区端点类型只能为圆头缓冲。', oper: '1、地图中，蓝色线地物为长春市团结路；2、点击 “缓冲区分析” 按钮，对“团结路”进行半径 10 米的圆头缓冲区分析，显示的橙色面状区域即为该道路拓宽后的范围；3、点击 “移除结果” 按钮，将当前缓冲区分析结果清除。' }
DemoDescription['bufferQuery'] = {title: '缓冲区分析二', desc: '本综合应用案例是对 gps 信号点进行历史轨迹的生成，并对信号影响的区域进行分析，查询并显示出受此 gps 信号影响的工厂。', oper: '1、地图中的离散点代表 gps 信号采集点；2、点击 “生成路径” 按钮，将地图上的 gps 信号点生历史轨迹；3、点击 “缓冲区分析” 按钮，对 gps 点所构成的线路进行缓冲区分析；4、点击“查询” 按钮，对 gps 信号影响到的工厂进行查询并显示；5、点击 “清除显示” 按钮，清除分析及查询结果。' }
DemoDescription['thiessenAnalyst'] = {title: '泰森多边形分析', desc: '此范例展示iServer邻近分析的使用，进行邻近分析的方法实现泰森多边形的建立。根据长春市的工厂分布的点数据集建立泰森多边形，从而获得点之间的邻近分析', oper: '点击"数据集泰森多边形"按钮查看工厂数据集生成的泰森多边形，点击"几何泰森多边形"按钮查看根据几何点生成的泰森多边形，点击"移除结果图层"可删除泰森多边形。'}
DemoDescription['overlayAnalystService'] = {title: '叠加分析', desc: '定义:在统一空间参考系统下，通过对两个数据集进行的一系列几何运算，提取用户需要的新的空间几何信息，产生新数据集的过程。该空间处理支持剪裁、擦除、同一、求交、对称差、合并、更新几种叠加分析操作。SuperMap 中的叠加分析涉及到三个数据集，其中一个为源数据集，除合并运算和对称差运算必须是面数据集外，其他运算可以是点、线、面、 CAD 数据集或者路由数据集；另一个数据集为叠加数据集，必须为面数据集；还有一个数据集就是叠加结果数据集，用于保存叠加分析得到的结果数据。', oper: '1、本范例以合并(UNION)为例，将京津地区的行政区域与临边地区的行政区域做合并，即可对两个数据集进行合并(UNION)操作；2、点击 "叠加分析" 按钮，进行行政区合并操作，并显示合并结果（图中的蓝色区域为合并后的行政区域）；3、点击 "移除结果" 按钮，移除当前的合并结果。' }
DemoDescription['surfaceAnalyst'] = {title: '表面分析', desc: '等值线是将相邻的具有相同值的点（诸如高程、温度、降水、污染或大气压力）连接起来的线。常见的有等温线，等压线，等高线，等势线等。等值线的分布反映了栅格表面上值的变化，等值线分布越密集的地方，表示栅格表面值的变化比较剧烈，例如，如果为等高线，则越密集，坡度越陡峭；等值线分布较稀疏，表示栅格表面值的变化较小，若为等高线，则表示坡度很平缓。通过提取等值线，可以找到高程、温度、降水等的值相同的位置，同时等值线的分布状况也可以显示出变化的陡峭和平缓区。', oper: '1、图中绿色点为全国温度信息收集站，选取(0,4010338)、(1063524,4010338)、(1063524,3150322)、(0,3150322)区域，通过对该点数据集(SamplesP@Interpolation)的温度字段值进行插值分析，得到栅格数据集（方法实现的中间结果），接着从栅格数据集提取等值线。2、点击 “提取等值线” 按钮，蓝色线要素即为等温线，等温线越密集，表示气温差别越大；3、点击 “移除等值线” 按钮，清除当前分析结果。' }
DemoDescription['dynamicSegmentation'] = {title: '动态分段', desc: '动态分段是在地图上动态显示线性参考要素的过程，在不改变要素原有空间数据结构的条件下，建立线性要素上任意路段与多重属性信息之间关联关系。动态分段的实时路况展示是用不同的颜色表示不同的路况信息，其中，红色表示交通堵塞，黄色表示缓行，绿色表示交通畅通。', oper: '1、点击 “动态分段” 按钮，地图上显示动态分段实时路况；2、点击 “清除” 按钮，清除当前的显示。' }
DemoDescription['routeCalculateMeasure'] = {title: '点定里程', desc: '定义：指定路由上某点到起始点的M值', oper: '点定里程，实际应用情景比如知道某事故发生的位置坐标的时候需要确定该点位于某路口距离。' }
DemoDescription['routeLocatorPoint'] = {title: '里程定点', desc: '定义：指定距离同时在路由上标出对应点', oper: '里程定点，应用情景与点定里程相反，比如知道某事故距离某路口位置，需要确定其相对精确的坐标的时候使用。' }
DemoDescription['routeLocatorLine'] = {title: '里程定线', desc: '定义：指定线的范围在路由上标出对应的线', oper: '里程定线，应用场景可以是当知道某一路段发生阻塞，能够确定该路段相对精确的位置范围。' }
DemoDescription['interpolationAnalystByDensity'] = {title: '点密度插值分析', desc: '定义：插值分析可以将有限的采样点数据，通过插值算法对采样点周围的数值情况进行预测，可以掌握研究区域内数据的总体分布状况，从而使采样的离散点不仅仅反映其所在位置的数值情况， 还可以反映区域的数值分布。这里使用点密度插值分析。', oper: '本例采用的插值分析是点密度，点击“点密度”按钮对数据集进行点实体密度插值分析,并以栅格分段专题图展示。' }
DemoDescription['interpolationAnalystByIDW'] = {title: '反距离加权插值分析', desc: '定义：插值分析可以将有限的采样点数据，通过插值算法对采样点周围的数值情况进行预测，可以掌握研究区域内数据的总体分布状况，从而使采样的离散点不仅仅反映其所在位置的数值情况， 还可以反映区域的数值分布。这里使用反距离加权插值分析。 ', oper: '本例采用的插值分析是反距离加权，点击“反距离加权”对数据集进行反距离加权插值分析，并以栅格分段专题图展示。' }
DemoDescription['interpolationAnalystByKriging'] = {title: '克吕金插值分析', desc: '定义：插值分析可以将有限的采样点数据，通过插值算法对采样点周围的数值情况进行预测，可以掌握研究区域内数据的总体分布状况，从而使采样的离散点不仅仅反映其所在位置的数值情况， 还可以反映区域的数值分布。这里使用克吕金插值分析。 ', oper: '本例采用的插值分析是Kriging，分别点击“简单Kriging”、“普通Kriging”和“泛Kriging”按钮对数据集进行不同的克吕金插值分析，并以栅格分段专题图展示。' }
DemoDescription['interpolationAnalystByRBF'] = {title: '径向基函数插值分析', desc: '定义：插值分析可以将有限的采样点数据，通过插值算法对采样点周围的数值情况进行预测，可以掌握研究区域内数据的总体分布状况，从而使采样的离散点不仅仅反映其所在位置的数值情况， 还可以反映区域的数值分布。这里使用径向基函数插值分析。', oper: '本例采用的插值分析类型是径向基函数，点击“径向基函数”对数据集进行径向基函数插值分析，并以栅格分段专题图展示。' }
DemoDescription['interpolationAnalystByGeometry'] = {title: '离散点插值分析', desc:' 定义：插值分析是用于对离散的点数据进行插值得到栅格数据集。将某个区域的采样点数据插值生成栅格数据，实际上是将研究区域按照给定的格网尺寸（分辨率）进行栅格化，栅格数据中每一个栅格单元对应一块区域，栅格单元的值由其邻近的采样点的数值通过某种插值方法计算得到，因此，就可以预测采样点周围的数值情况，进而了解整个区域的数值分布情况。其中，插值方法主要有点密度插值法、距离反比权值插值法、克吕金（Kriging）内插法、径向基函数RBF（Radial Basis Function）插值法等。', oper: '本范例采用的插值分析类型是geometry，对geometry进行插值分析，目前只有IDW插值分析支持geometry。' }
DemoDescription['terrainCurvatureCalculation'] = {title: '地形曲率计算', desc: '此范例展示 iServer 地形计算资源中曲率计算的使用，示例用京津地图的地形数据计算出京津地区的平均曲率，并用栅格专题图的方式在客户端呈现结果数据集', oper: '点击"地形曲率计算"按钮查看结果数据集生成的栅格专题图，点击"移除结果图层"可删除该栅格专题图。'}
DemoDescription['mathExpression'] = {title: '栅格代数运算', desc: '此范例展示 iServer 栅格代数运算表达式资源的使用，示例对栅格数据集 Jingjin.JingjinTerrain 中所有栅格单元的值加 600, 并用栅格专题图的方式在客户端呈现结果数据集', oper: '点击"栅格代数运算"按钮查看结果数据集生成的栅格专题图，点击"移除结果图层"可删除该栅格专题图。'}
DemoDescription['densityKernelAnalyst'] = {title: '核密度分析', desc: '此范例展示 iServer  密度分析根资源中核密度分析的使用，示例对长春市里一个区域的铁路分布做了核密度分析, 并用栅格专题图的方式在客户端呈现结果数据集', oper: '点击"核密度分析"按钮查看结果数据集生成的栅格专题图，点击"移除结果图层"可删除该栅格专题图。'}

DemoDescription['closestFacilities'] = {title: '最近设施分析', desc: '定义：最近设施分析是指在网络上给定一个事件点和一组设施点，查找从事件点到设施点(或从设施点到事件点)以最小耗费能到达的最佳路径。设施点一般为学校、超市、加油站等服务设施；事件点为需要服务设施的事件位置。例如事件发生点是一起交通事故，要求查找在 10 分钟内能到达的最近医院，超过 10 分钟能到达的都不予考虑。此例中，事故发生地即是一个事件点，周边的医院则是设施点。网络分析中的查找最近设施点主要应用在汽车油量不足，需要找到最近的加油站；突发疾病，需要查找最近的急救中心的救护等类似事件。', oper: '1、地图中标识图标表示分布的医院(设施点)；2、点击 “事件点” 按钮，然后在地图中选择发生事故的一个事件点；3、点击 “提交” 按钮，查找最近的医院；4、点击 “清除” 按钮，清除当前选择的事件点以及分析结果。' }
DemoDescription['findLocation'] = {title: '选址分区分析', desc: '定义：选址分区分析是为了确定一个或多个待建设施的最佳或最优位置，使得设施可以用一种最经济有效的方式为需求方提供服务或者商品。选址分区不仅仅是一个选址过程，还要将需求点的需求分配到相应的新建设施的服务区中，因此称之为选址与分区。现实中，选址问题有非常广阔的应用领域，如餐馆、邮局选址，工厂选址、图书馆、学校、医院、消防站、工厂、飞机场、仓库等的最佳位置的确定。如某商业银行需要在某城市内新增几家分支机构，以便满足客户日常金融业务的需求。要求覆盖城市 100％ 区域，城市的每一个角落到达该银行的任一分支机构都不超过 3000 米的路程。现已有 5 家支行，那么至少新建几家分支机构才能满足需求呢？选址在哪里最合适呢？上述问题就是一个选址分区的例子，应用网络分析中的选址分区方法，可以解决类似问题。 对于选址分区而言，创建中心点的意义与资源分配有所不同。在选址分区中，中心点为固定中心点即表示原有的服务供给点，以案例为例，即现有的5家支行；中心点为可选中心点即表示需要增加的候选服务提供点，以案例为例，所有候选目的地；资源量，以案例为例，因为是全城覆盖，所以认为每个中心点都能全城覆盖，故可以设置为一个无限大的值，一般设置为与结点需求字段值总和相同后稍大值。', oper: '1、点击 “分析” 按钮，进行选址分区分析(在此范例程序中，设置期望用于最终设施选址的资源供给中心数量为3)；2、点击 “清除” 按钮，清除当前的分析结果。' }
DemoDescription['findMTSPPaths'] = {title: '多旅行商分析', desc: '定义：多旅行商分析也称为物流配送，是指在网络数据集中，给定 M 个配送中心点和 N 个配送目的地（M，N 为大于零的整数），查找经济有效的配送路径，并给出相应的行走路线。物流配送功能就是解决如何合理分配配送次序和送货路线，使配送总花费达到最小或每个配送中心的花费达到最小。在此举一个现实中的例子来说明物流配送：某区域烟草销售公司有 3 个配送中心点，有 10 个分销商，现需要从各个配送中心点为所有的分销商配货。销售点派出 M 辆送货车分别从各自的位置出发，到 N 个点送货,每辆送货车都需要按照最优次序对各自的送货点送货。SuperMap GIS 提供的物流配送功能可以解决最优路线问题。在这个配送实例中，配送中心就是送货车发车位置，而配送目的地就是订单上的地址。', oper: '1、图中标识图标表示报刊配送中心；2、点击 “配送目标” 按钮，然后在地图中选择多个报刊亭(配送目的地)；3、点击 “提交” 按钮，进行报刊配送路径分析；4、点击 “清除” 按钮，清除当前的配送目标以及分析结果。' }
DemoDescription['findMTSPPathsAndTSPPaths'] = {title: '多旅行商分析（综合应用）', desc: '多旅行商分析定义：多旅行商分析也称为物流配送，是指在网络数据集中，给定 M 个配送中心点和 N 个配送目的地（M，N 为大于零的整数），查找经济有效的配送路径，并给出相应的行走路线。物流配送功能就是解决如何合理分配配送次序和送货路线，使配送总花费达到最小或每个配送中心的花费达到最小。旅行商分析定义：旅行商分析是路径分析的一种，它从起点开始（默认为用户指定的第一点）查找能够遍历所有途经点且花费最小的路径。旅行商分析也可以指定到达的终点，这时查找从起点能够遍历所有途经点最后到达终点，且花费最小的路径。在此举一个现实中物流配送的例子来说明多旅行商分析及旅行商分析的综合应用：某食品厂从各个仓库配送中心将食品货物配送到用户指定的零售站，并且给出质检员定期到各个零售站检查货品情况时所走的花费最小的路线。在这个配送实例中，各个仓库就是送货车发车位置，而配送目的地就是零售站。', oper: '1、图中标识图标表示某食品厂的仓库配送中心；2、点击 “配送目标” 按钮，然后在地图中选择多个零售站(配送目的地)；3、点击 “物流配送” 按钮，进行货物配送，即多旅行商分析；4、点击 “质检巡查” 按钮，给出质检员定期到所有零售站检查货品情况时花费最小的路线，即旅行商分析；5、点击 “清除” 按钮，清除当前的配送目标以及分析结果。' }
DemoDescription['findPath'] = {title: '最佳路径分析', desc: '定义：最佳路径是在网络数据集中指定一些结点，必须按照顺序访问结点从而求解起止点之间阻抗最小的路径。例如如果要顺序访问 1、2、3、4 四个结点，则需要分别找到 1、2 结点间的最佳路径 R1—2，2、3 间的最佳路径 R2—3 和 3、4 结点间的最佳路径 R3—4，顺序访问 1、2、3、4 四个结点的最佳路径就是 R = R1—2 + R2—3 + R3—4。“阻抗最小”有多种理解，如基于单因素考虑的时间最短、费用最低、风景最好、路况最佳、过桥最少、收费站最少、经过乡村最多等，和基于多因素综合考虑的风景最好且经过乡村较多或者时间较短、路况较佳且收费站最少等。', oper: '1、点击 “选择站点” 按钮，然后在地图中选择您要行走的地点(结点)；2、点击 “提交” 按钮，，即可以即时看到两点间的最佳路径；3、点击 “清除” 按钮，清除当前选择的站点及分析结果。' }
DemoDescription['findTSPPaths'] = {title: '旅行商分析', desc: '定义：旅行商分析是路径分析的一种，它从起点开始（默认为用户指定的第一点）查找能够遍历所有途经点且花费最小的路径。旅行商分析也可以指定到达的终点，这时查找从起点能够遍历所有途经点最后到达终点，且花费最小的路径。旅行商分析和最佳路径分析都是在网络中寻找遍历所有站点的最经济的路径，区别是在遍历网络所有站点的过程中对结点访问顺序不同。最佳路径分析必须按照指定顺序对站点进行访问，而旅行商分析是无序的路径分析。在旅行商分析中，结点分为 4 类：起点、终点、中间点、起止点。根据结点的设置不同，其结果也分为：1)仅指定起点：系统从起点出发按照代价最小的原则迭代得到旅行的最佳路线。 2)指定起点和终点：系统从起点出发至终点结束，中间分析按照代价最小的原则迭代得到旅行的最佳路线。3)指定起止点：所谓起止点即起点=终点。指定起止点的分析是系统从起点出发至其点结束，中间分析按照代价最小的原则迭代得到旅行的最佳路线。', oper: '1、点击 “选择站点” 按钮，然后在地图中选择您要旅行途径站点；2、点击 “提交” 按钮，进行旅行商分析；3、点击 “清除” 按钮，清除当前的站点以及分析结果。' }
DemoDescription['serviceAreas'] = {title: '服务区分析', desc: '定义：服务区分析是以指定服务站点为中心，在一定服务范围内查找网络上服务站点能够提供服务的区域范围。例如：计算某快餐店能够在 30 分钟内送达快餐的区域。网络上拥有资源量的结点在这里被抽象成服务站点，服务站点的最大服务距离抽象成网络服务半径，分析成功后可以得到服务站点的服务网络和服务区域(多边形)。服务区分析也可以理解为不考虑中心资源供给量和需求量，而只考虑供给方与需求方之间网络弧段阻力的资源分配。这类分析一般可用于评估分析在某一位置邮局、医院、超市等公共设施一般的服务范围，从而为选择公共设施的最佳位置提供参考。', oper: '1、点击 “服务中心点” 按钮，然后在地图中选择您要分析的服务中心点(支持多中心)；2、点击 “提交” 按钮，进行服务区分析按照选择服务中心点的顺序依次按照 500、600、700...递增的数值作为服务半径进行缓冲区分析。(即第一个服务中心点的服务半径为 500，第二个服务中心店的服务半径为 600，依次类推)；3、点击 “清除” 按钮，清除当前的服务中心点以及分析结果。' }
DemoDescription['trafficTransfer'] = {title: '公交换乘服务', desc: '定义：通过输入任意出行起点、终点，公交换乘系统可在相应的约束条件下，查找搜索出公交出行路线和换乘方案，用户根据自己的需要选择合适的出行方案。', oper: '1、输入要查询的起始地名，起始站点文本框中会搜索出地名附近所有站点，用户选择合适的站点，同理，在终点站点文本框中选择合适的终点站点;2、点击 “换乘策略” 按钮，可进行按时间最短、距离最短、最少换乘、最少步行四种换乘方式进行查询。' }

//可视化
DemoDescription['heatmapLayer'] = {title: '热点图', desc: '定义：显示热点图信息。', oper:'1、设置热点数量和半径大小，并且选择热点半径单位，这里提供了 px 和 degree 两种单位，点击渲染查看效果；2、点击清除删除热点。' }
DemoDescription['heatmapColorSection'] = {title: '热点图颜色分段设置', desc: '定义：显示热点图信息，并且可以快速的看出温度范围内颜色的渐变。', oper:'1、设置热点数量和半径大小，并且选择热点半径单位，这里提供了 px 和 degree 两种单位，点击渲染查看效果；2、点击清除删除热点。' }
DemoDescription['heatmapColorManual'] = {title: '热点图颜色分段设置', desc: '定义：显示热点图信息，可以改变热点图的颜色范围显示。', oper:'1、设置热点数量和半径大小，并且选择热点半径单位，这里提供了 px 和 degree 两种单位，点击渲染查看效果；2、点击清除删除热点；3、点击"颜色图片"可以加载颜色值，点击渲染查看效果。' }
DemoDescription['heatGridLayer'] = {title: '热点网格图', desc: '定义：热点网格图层。热点图和聚合的结合，强调热度、数值，常用于温度、海拔高度等的显示。', oper: '1、格网的数据范围和style通过格网子对象数组items设置；2、网格label根据labelMode的不同可以显示当前网格包含数据量的数量、平均值、最大值、最小值。' }
DemoDescription['clusterLayer'] = {title: '聚类图层', desc: '定义：可以实现以聚合的方式显示大量点数据。这是一种渲染大数据量点的策略，当点非常多、非常密集的时候，将一定范围内的点聚合为一个大点（聚合点），该聚合点反映了这些点的数量和大体位置信息。当放大地图时候，聚合点会逐步散开为小点。', oper: '放大地图聚合点会逐步散开，缩小地图兴趣点会逐步聚合，点击聚合点会散开为兴趣点（默认聚合数超过50的聚合点，不会散开），点击散开的兴趣点会弹出信息框' }
DemoDescription['utfGridLayer'] = {title: 'UTFGrid图层', desc: '定义：通过UTFGrid图层解决大数据量交互效果问题', oper: 'UTFGrid图层是一个特殊图层，它不像其他图层可见，而是将对应瓦片数据加载到内存中，从而能够快速的交互。' }
DemoDescription['utfGridLayerFlags'] = {title: 'UTFGrid图层世界国旗版', desc: '定义：通过UTFGrid图层快速的响应用户的鼠标移动事件，显示出对应国家的国旗',oper:'鼠标移动到相应的国家上面，左上角将显示对应国家的国旗。' }
DemoDescription['gois'] = {title: '麻点图', desc: '定义：麻点图。大数据量渲染的解决方案，案例中渲染了全国的乡镇数据，约3万条', oper: '点击“渲染麻点图”按钮，创建并渲染麻点图，点击“清除”按钮，清除麻点图。' }
DemoDescription['elements'] = {title: 'Elements Layer 扩展', desc: '定义：使用Elements向地图添加自定义的Dom，本范例中添加了一张图片，并实现了图片与地图同步缩放、平移。本范例展示了Elements的基本用法，包括向地图添加用户自定义Dom（可以是第三方Dom），Dom随地图平移和缩放。', oper: '对地图进行缩放和平移操作，观察图片位置、大小和透明度的变化。' }

DemoDescription['animatorBase'] = {title: '基础渲染', desc: '主要展示点的位置移动、线和面的位置移动以及形状的改变，点线面的数据分别只有两个时间点的数据，中间效果通过差值实现', oper: '通过按钮开始和暂停可以控制点线面的动画' }
DemoDescription['animatorPoint'] = {title: '点渐变', desc: '主要展示点的位置移动，数据时随机生成的', oper: '通过按钮开始和暂停可以控制点渐变动画。' }
DemoDescription['animatorLine'] = {title: '线渐变', desc: '主要展示线的位置移动以及形状的改变', oper: '通过按钮开始和暂停可以控制线渐变动画。' }
DemoDescription['animatorPolygon'] = {title: '面渐变', desc: '主要展示面的位置移动以及形状的改变', oper: '通过按钮开始和暂停可以控制面渐变动画。' }
DemoDescription['animatorTrain'] = {title: '火车监控模拟', desc: '定义：此范例模拟了某一天从0时刻到24点之间全国一些重要城市的部分火车运行情况，黄色代表短途火车，紫色代表长途火车。', oper: '点击对应的按钮可以实现动画的开始、暂停、停止、加速、减速、正反向播放的切换以及闪烁效果和尾巴效果的开关。' }
DemoDescription['animatorCar'] = {title: '汽车监控模拟', desc: '定义：此范例模拟了某一段时间内长春市部分汽车的行驶情况，使用自定义的图片来展示。', oper: '首先需要查询车辆，然后可以通过开始监控、暂停监控、停止监控进行控制。' }
DemoDescription['animatorMetro'] = {title: '地铁修建模拟', desc: '主要展示线的延伸效果，模拟了北京地铁修建的过程', oper: '通过按钮开始和暂停可以控制地铁修建动画，同时可以隐藏或显示底图。点击对应的地铁站可以查看详细信息。' }
DemoDescription['animatorMetro2'] = {title: '地铁修建模拟2', desc: '主要展示线的延伸效果，模拟了北京地铁修建的过程', oper: '通过按钮开始和暂停可以控制地铁修建动画，同时可以隐藏或显示底图。点击对应的地铁站可以查看详细信息。' }
DemoDescription['animatorWeatherMonitor'] = {title: '气象监测模拟', desc: '定义：获取气象温度分布等值面信息（模拟使用存放在本地的数据），通过矢量动画渲染在客户端直接动态显示，实现实时监听。', oper: '通过按钮开始和暂停可以控制动画。' }
DemoDescription['animatorMigrate'] = {title: '春运模拟', desc: '主要展示了点数据模拟线数据形式进行迁移的效果，模拟了春运期间个大主要城市的人员流入与流出过程，可以看出北京、上海、广州、成都等几大城市在春运期间的人员流出量巨大（线越粗越长，表示迁移人口越大）', oper: '通过按钮开始和暂停可以控制动画。' }

DemoDescription['tiledVectorLayer'] = {title: '矢量分块图', desc: '定义：矢量分块图，访问服务器以瓦片形式发布的矢量数据，并在客户端进行快速渲染', oper: '无' }
DemoDescription['cartoCSS_point'] = {title: '点符号', desc: '定义：前端CartoCSS符号系统，点符号的展示，用户可通过CartoCSS自定义点符号', oper: '无' }
DemoDescription['cartoCSS_line'] = {title: '线符号', desc: '定义：前端CartoCSS符号系统，线符号的展示，用户通过CartoCSS可以设置线的颜色、线宽、线的顶端的形状、拐角的形状，还有虚线的模式等等，本范例就是通过CartoCSS样式的线符号特性来模拟了铁路线符号。', oper: '无' }
DemoDescription['cartoCSS_polygon'] = {title: '面符号', desc: '定义：前端CartoCSS符号系统，面符号的展示，用户通过CartoCSS可设置面符号的颜色，外围边界线颜色等属性', oper: '无' }
DemoDescription['cartoCSS_text'] = {title: '文本符号', desc: '定义：前端CartoCSS符号系统，文本符号的展示，用户通过CartoCSS可设置文本符号的字体，字的大小，字的颜色等等', oper: '无' }
DemoDescription['cartoCSS_hightlight'] = {title: '高亮显示', desc: '定义：前端CartoCSS符号系统，点击和鼠标移动的高亮显示，通过在CartoCSS中hover或者click选择器，用户可方便地自定义高亮显示的符号样式，', oper: '鼠标单击世界地图上的南极洲，可以看到陆地图层上的要素ID小于100的要素高亮起来了，再点击没有高亮的国家（中国除外），这些国家也高亮起来了。鼠标移动到各大洲的文本上时，文本也高亮了。' }
DemoDescription['cartoCSS_edit'] = {title: 'CartoCSS编辑', desc: '定义：利用可视化的矢量地图编辑器，用户可以轻松地定制自己的地图', oper: '在可视化的矢量地图编辑器里面，选择相应的图层，在需要在该图层上修改的样式属性上打勾，然后调整其相应的属性值，此外还可以按住ctrl键，对矢量地图编辑器上的带四个箭头的按钮进行拖拽，从而改变编辑器的位置；点击其中的一个箭头，还可以改变编辑器的方位。' }
DemoDescription['cartoCSS_boundryStyle'] = {title: '强边界风格', desc: '定义：利用地图样式表CartoCSS配出的强边界风格地图', oper: '无' }
DemoDescription['cartoCSS_darkblueStyle'] = {title: '深夜蓝黑风格', desc: '定义：利用地图样式表CartoCSS配出的深夜蓝黑风格地图', oper: '无' }
DemoDescription['cartoCSS_naturalStyle'] = {title: '淡雅绿风格', desc: '定义：利用地图样式表CartoCSS配出的淡雅绿风格地图', oper: '无' }
DemoDescription['cartoCSS_nightStyle'] = {title: '月夜风格', desc: '定义：利用地图样式表CartoCSS配出的月夜风格地图', oper: '无' }
DemoDescription['cartoCSS_helloKitty'] = {title: 'helloKitty风格', desc: '定义：利用地图样式表CartoCSS配出的helloKitty风格地图', oper: '无'}

//OGC
DemoDescription['wmtsLayer'] = {title: 'WMTS 图层', desc: '定义：使用WMTS图层，可以访问基于OGC WMTS 1.0.0 标准实现图层服务，包括iserver以外的其他第三方WMTS服务。WMTS 是 OGC 提出的首个支持 REST 的服务标准，目前为 1.0.0 版本，该服务支持三种请求模式：HTTP KVP（Key-Value Pair）方式、SOAP 方式、REST方式。注意事项：WMTS对接更为广泛的服务，要求用户必须设置出图请求所需的各类参数：matrixIds、resolutions、layer、matrixSet、url等，其中matrixIds和resolutions会因为服务和出图依照的标准比例尺集不同而有所差异，需根据情况自行设置，这点有别于其他客户端产品！', oper: '无' }
DemoDescription['wcs'] = {title: 'WCS图层', desc: ' WCS（Web Coverage Service，网络覆盖服务）服务符合 OGC（Open Geospatial Consortium，开放地理信息联盟）制定的 WCS 实现规范。详情：http://www.opengeospatial.org。', oper: '无' }
DemoDescription['wms'] = {title: 'WMS图层', desc: ' WMS（Web Map Service，Web 地图服务）服务，该服务符合 OGC（Open Geospatial Consortium，开放地理信息联盟）制定的 WMS 实现规范。WMS利用具有地理空间位置信息的数据制作地图，其中将地图定义为地理数据可视的表现。现支持WMS的版本为”1.1.1”和”1.3.0”，该范例提供了两种投影系(4326和3857)和两个wms版本，可以相互切换。', oper: '通过切换不同的投影及版本来修改地图。'}
DemoDescription['kml'] = {title: 'kml图层', desc: '定义：加载kml图层到地图上。', oper: '点击加载按钮来加载kml图层。' }
DemoDescription['GeoJSON'] = {title: 'GeoJSON数据展示', desc: '定义：展示GeoJSON格式的数据', oper: '无' }
DemoDescription['queryByWFS'] = {title: 'WFS 查询', desc: '定义：对地图进行GerFeature查询，通过get请求返回世界首都地理信息。',oper: 'WFS服务需要在发布的情况下使用' }

//其他
DemoDescription['mapPrint'] = {title: '地图打印', desc: '定义：地图打印功能主要用于打印地图数据，同时可以打印矢量元素以及信息框等。', oper: '点击“标注”按钮，生成标注，再点击标注弹出信息框，点击“打印地图”按钮打印地图。展示打印地图数据、标注图层和信息框类。 ' }
DemoDescription['printscreen'] = {title: '地图截图', desc: '定义：截图功能主要用于截取地和矢量元素等并保存为本地图片。', oper: '点击“标注”按钮，生成标注，再点击标注弹出信息框，点击“截图”按钮截取地图并保存为本地图片。截图可截取标注和矢量元素等，但不能截取信息框。 ' }
DemoDescription['a0mapPrint'] = {title: '地图A0大幅打印', desc: '定义：支持A0纸张大小的打印。A0大幅打印功能可以打印地图数据，但不能打印矢量元素和信息框等。由于打印的地图数据从服务端获取，所以只可打印地图数据。', oper: '在地图上选择想要打印的级别和位置，点击“A0大幅打印”按钮，服务端会计算合适的范围大小，并请求出A0大小的图片，然后在打印属性窗口选择A0大小纸张，就可以打印出A0纸张大小的图片了。 ' }
DemoDescription['projection'] = {title: '投影转换', desc: '定义：实现客户端的坐标投影转换。', oper:'实现EPSG:3857向EPSG:4326的转换，在地图上移动鼠标位置，会显示转换后的鼠标位置的坐标。' }
DemoDescription['dataWebGL'] = {title: 'WebGL Globe', desc: '定义：通过WebGL Globe展示iServer数据', oper: '该范例通过第三方三维球WebGL Globe展示iServer查询返回的数据，数据格式简单转换成WebGL Globe要求的数据格式,该范例在Chrome浏览器展示最佳，注意IE浏览器暂不支持WebGL以及要在发布状态下访问。' }
DemoDescription['setlayerstatus'] = {title: '子图层控制', desc: '定义：子图层控制', oper: '子图层可见性控制功能一般与获取图层信息的功能联合使用。首先获取地图图层可见性状态，然后创建地图的服务端临时图层，在生成的临时图层中控制子图层的可见性状态，最后将临时图层的newResourceID值赋给创建的TiledDynamicRESTLayer图层，将临时图层显示出来，即完成图层新状态的设置。' }
DemoDescription['layerGroup'] = {title: '图层组控制', desc: '定义：图层组控制', oper: '图层组是子图层中的一种特殊情况，即子图层中包含了图层组，方便用户可以一次控制多个子图层的显示和隐藏。（注：范例中使用了zTree控件，API详见：http://www.ztree.me/v3/api.php）' }
DemoDescription['tokenCredential'] = {title: '安全认证范例', desc: '定义：安全认证范例，通过token来控制地图可见。', oper: '1、开启iServer安全认证，并对特定地图服务实例进行权限控制；2、将地图服务实例与对应token输入文本框；3、单击确定即可；注意：该范例应该使用分块动态 REST 图层。' }
DemoDescription['d3_windmap'] = {title: '风向图', desc: '定义：风向图，模拟中国冬季季风。基于d3js实现。', oper: '无' }
DemoDescription['polling'] = {title: '轮询范例', desc: '定义：通过对不同服务器进行轮询，从而获得来自多个不同的服务器的地图服务，加速出图速度', oper: '在输入框中输入地图服务器地址，点击+号即可添加一个url，可以反复添加多个。' }
DemoDescription['layerSwitch'] = {title: '卷帘', desc: '定义：卷帘效果，通过分割窗口，来显示两个地图或图层，拖动卷帘滑动条，可比较、查看图层。', oper: '鼠标按住卷帘滑动条并拖动，可查看下面的图层，以及快速直观地比较图层。此范例目前支持Chrome、Firefox、IE9及其以上浏览器。' }
DemoDescription['d3_zoomablePacking'] = {title: 'D3拾取器', desc: '定义：D3拾取器-北京奥运会金牌分布拾取器。此范例展示扩展图层（Element）的使用，基于d3js - Zoomable Circle Packing 实现，范例呈现北京奥运会金牌在世界范围类的分布情况。', oper: '1、在Tomcat下发布范例；2、点击拾取器里的国家名称，在地图上展示该国在北京奥运会取得的金牌数。' }
DemoDescription['mousestyle'] = {title: '鼠标样式', desc: '此范例展示鼠标移动到相应图层，显示不同的鼠标移动样式。',oper:'将鼠标移动到图层上面显示不同的鼠标样式。'}
DemoDescription['contextMenu'] = {title: '右键菜单', desc: '此范例展示地图范围内右键显示自定义菜单，取消页面默认的右键菜单。',oper:'点击鼠标右键，分别选择放大缩小的选项对地图进行放大缩小，点击鼠标左键或者平移地图，右键菜单隐藏。'}
DemoDescription['jqueryContextMenu'] = {title: 'jquery右键菜单', desc: '此范例使用jQuery的contextmenu插件来实现右键菜单。',oper:'点击鼠标右键，分别选择放大缩小对地图进行放大缩小，单击鼠标左键或者鼠标移除地图，右键菜单隐藏。'}
DemoDescription['rightClick'] = {title: 'marker右键菜单', desc: '此范例使用marker的rightClick事件来实现右键菜单。',oper:'在Marker上点击鼠标右键，选择居中将marker设置成为地图的中心点；选择删除对marker进行删除操作，点击鼠标左键或者平移地图，右键菜单隐藏。'}
DemoDescription['featureRightClick'] = {title: 'feature右键菜单', desc: '此范例使用feature的rightClick事件（绑定在selectFeature控件上的）来实现右键菜单。',oper:'在点要素上点击鼠标右键，选择居中将feature设置成为地图的中心点；选择删除对feature进行删除操作，点击鼠标左键或者平移地图，右键菜单隐藏。'}
DemoDescription['d3_dynamicPieChart'] = {title: '动态饼图', desc: '定义：动态饼图，结合 Elements 图层、UTFGrid 图层、D3.js 实现的动态饼图，饼图内容是鼠标位置所在省份面积占全国面积的比例。此范例展示扩展图层（Elements）与 属性图层（UTFGrid） 联合使用方式。', oper: '将鼠标移动到中国的各个省份区域，可以看到在鼠标位置生成相应省份的面积比饼图。' }
DemoDescription['echart_graphBar'] = {title: 'eChart柱状图', desc: '定义：eChart柱状图，此范例展示通过客户端扩展图层 Elements 在地图中使用百度 eChart 图表的方法。(注: 图表中的数据为随机数据，不具备参考价值)', oper: '将鼠标移动到中国的各个省份区域，可以看到在鼠标位置生成的eChart柱状图' }
DemoDescription['SM_OSMBuildings_addGeoJson'] = {title: 'OSMBuildings AddData', desc: '定义：OSMBuildings AddData，此范例展示在客户端扩展图层 OSMBuildings 中添加GeoJson格式的Buildings数据。(注: 范例的数据为简略数据，更多的数据和参数设置请参考 https://github.com/kekscom/osmbuildings/blob/master/README.md 中API部分)', oper: '移动底图，看Buildings的视觉效果；地图的放大缩小，查看Buildings的变化；不同时间，看Buildings的阴影变化；点击OSMBuildings，查看其ID属性信息。' }
DemoDescription['SM_OSMBuildings_DrawBuildings'] = {title: 'OSMBuildings 绘制', desc: '定义：OSMBuildings 绘制，此范例展示在客户端扩展图层 OSMBuildings 绘制Buildings，并设置一些Building的属性，绘制不同的OSMBuidings。(注: 范例的属性为简略参数，更多的参数设置请参考 https://github.com/kekscom/osmbuildings/blob/master/README.md 中API部分。)', oper: '先设置OSMBuildings顶部高度，底部高度，以及墙壁，顶部颜色；然后移动鼠标，依次在地图中选择一些位置单击鼠标左键，在结束位置双击鼠标左键；即可绘制OSMBuidings。' }
DemoDescription['SM_OSMBuildings_RestData'] = {title: 'OSMBuildings Rest', desc: '定义：OSMBuildings Rest，此范例通过客户端扩展图层 OSMBuildings 展示从服务器端请求返回的面数据，根据数据的一些属性进行进一步的加工生成OSMBuildings。(注: 范例的属性为简略参数，更多的参数设置请参考 https://github.com/kekscom/osmbuildings/blob/master/README.md 中API部分。)', oper: '移动底图，看Buildings的视觉效果；地图的放大缩小，查看Buildings的变化；不同时间，看Buildings的阴影变化；点击OSMBuildings，查看其ID属性信息。' }















