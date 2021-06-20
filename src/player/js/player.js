//基本参数定义
var audio = new Audio(),
	$player = $("#xplayer"),//播放器盒子ID
	$tips = $("#Tips"),//提示
	$switchPlayer = $(".switch-player", $player);//展开或收缩开关
	$play = $(".play", $player);//播放暂停按钮
	$cover = $(".cover", $player);//专辑封面图
	$songTime = $(".playprogress", $player),//播放时间
	$background = $(".bg", $player),//播放器背景
	$songName = $(".song", $player),//歌曲名称
	$artist = $(".artist", $player),//歌曲作者
	$needle = $(".play-needle", $player);//黑胶磁盘指针
	$switchColor = $(".switch-color", $player),//主题设置盒子
	$themeSet = $(".set-color", $player),//主题设置盒子
	cur = "current";//歌词的高亮
	
//展开或收缩播放器
$switchPlayer.click(function() {
	$player.toggleClass("show");
});
//播放暂停的全局动画管理
$play.click(function() {
	$cover.toggleClass("resume-cover");
	$needle.toggleClass("resume-needle");
	
	if($play.hasClass('fa-play')){//如果有‘test’的样式，就去除他的样式，添加‘active’的样式
		$play.removeClass('fa-play').addClass('fa-pause');
	}else if($play.hasClass('fa-pause')){//如果有‘active’的样式，就祛除他的样式，添加‘test’的样式
		$play.removeClass('fa-pause').addClass('fa-play');
	}
});

//颜色设置
$(function() {
	b = $.cookie('player_theme');
    setColor(b);
});
function setColor(a=null) {
	$.cookie("player_theme", a, {
		path: "/",
		expires: 30
	});
	$player.removeClass("blue");
	$player.removeClass("darkblue");
	$player.removeClass("green");
	$player.removeClass("vague");
	$player.addClass(a);
}
//打开或关闭主题设置
$switchColor.click(function() {
	$themeSet.toggleClass("show");
});
