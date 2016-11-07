var imgflag = false;
var htmltxt = _TEXT(function () {/*
 <div style="display:none"> </div>
 <style>
 body { background: #ffffff; color: #444;font-size:12px; }
 a { color: #07c; text-decoration: none; border: 0; background-color: transparent; }
 body, div, q, iframe, form, h5 { margin: 0; padding: 0; }
 img, fieldset { border: none 0; }
 body, td, textarea { word-break: break-all; word-wrap: break-word; line-height:1.6; }
 body, input, textarea, select, button { margin: 0; font-size: 12px; font-family: Tahoma, SimSun, sans-serif; }
 div, p, table, th, td { font-size:1em; font-family:inherit; line-height:inherit; }
 h5 { font-size:12px; }
 ol li,ul li{ margin-bottom:0.5em;}
 pre, code { font-family: "Courier New", Courier, monospace; word-wrap:break-word; line-height:1.4; font-size:12px;}
 pre{background:#f6f6f6; border:#eee solid 1px; margin:1em 0.5em; padding:0.5em 1em;}
 #content { padding-left:50px; padding-right:50px; }
 #content h2 { font-size:20px; color:#069; padding-top:8px; margin-bottom:8px; }
 #content h3 { margin:8px 0; font-size:14px; COLOR:#693; }
 #content h4 { margin:8px 0; font-size:16px; COLOR:#690; }
 #content div.item { margin-top:10px; margin-bottom:10px; border:#eee solid 4px; padding:10px; }
 hr { clear:both; margin:7px 0; +margin: 0;
 border:0 none; font-size: 1px; line-height:1px; color: #069; background-color:#069; height: 1px; }
 .infobar { background:#fff9e3; border:1px solid #fadc80; color:#743e04; }
 .buttonStyle{width:64px;height:22px;line-height:22px;color:#369;text-align:center;background:url(images/buticon.gif) no-repeat left top;border:0;font-size:12px;}
 .buttonStyle:hover{background:url(images/buticon.gif) no-repeat left -23px;}

 </style>

 <body><div id="forlogin">
 <table width="100%" border="0" align="center" cellpadding="4" cellspacing="4" bordercolor="#666666">

 <tr>
 <td width="150" align="right">选择区域<a style="color:red">*</a></td>
 <td style="cursor:pointer">
 <img alt="" src="images/i_draw_rect.png"border="0" title="选择区域" id="seleimg"  />  </td>

 </tr>
 <tr>
 <td width="150" align="right">插值对象<a style="color:red">*</a></td>
 <td>  <select id="Select1">
 <option>tu_pb</option>
 <option>tu_as</option>
 <option>tu_cr</option>
 <option>tu_hg</option>
 <option>nong_pb</option>
 <option>nong_cd</option>
 <option>nong_cr</option>
 <option>nong_hg</option>
 </select>
 </td>
 </tr>
 <tr>

 <td align="right" width="150"  id="thirdtxt" style="display:none">距离指数</td>
 <td><input type="text" id="distance"  value=2  style="display:none"/></td>

 </tr>
 <tr>
 <td colspan="2" align="left" style="padding-left:160px;">
 <input id="sub" type="button"  value="提交" class="buttonStyle" />
 <input onClick="tj();" class="buttonStyle" type="button" value="关闭" />
 <input id="output"  class="buttonStyle" type="button" value="输出" />
 </td>
 </tr>
 </table>
 </div></body>

 */
});
function getData() {
	var obj = document.getElementById("Select1"); //定位id
	var index = obj.selectedIndex; // 选中索引
	var text = obj.options[index].text; // 选中文本
	var dis = document.getElementById("distance").value;
	var req_para = { "obj": text, "dis": dis };
	var src = document.getElementById("seleimg").src;
	return req_para;
}


function _TEXT(wrap) {
	return wrap.toString().match(/\/\*\s([\s\S]*)\s\*\//)[1];
}

function tj() {
	Dialog.close();
}

function test() {
	console.log("初始值"+imgflag);
	imgflag = true;
	console.log("执行后值" + imgflag);
}
	 