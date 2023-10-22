song_1 = "";
song_2="";

function preload()
{
	song_1 = loadSound("music.mp3");
	song_2 = loadSound("music.mp3");
}

function setup() {
	canvas =  createCanvas(600, 500);
	canvas.center();

	video = createCapture(VIDEO);
	video.hide();

	poseNet = ml5.poseNet(video, modelLoaded);
	poseNet.on('pose', gotPoses);
}

function play()
{
    song.play();
}

function stop()
{
    song.stop();
}

function draw()
{
    image(video,0,0,600,500);
}