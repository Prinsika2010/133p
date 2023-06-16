Status = "";
TV_image = "";
objects = [];

function preload()
{
    fan_image = loadImage("TV.jpg");
}

function setup()
{
    canvas = createCanvas(640, 420);
    canvas.position(315, 200);
    objectDetector = ml5.objectDetector('cocossd', modelLoaded);
    document.getElementById("status").innerHTML = "Status : Dectecting Objects";
}

function modelLoaded()
{
    console.log("Model Loaded!");
    Status = true;
    objectDetector.detect(img, gotResult);
}

function gotResult(error, results)
{
    if (error)
    {
        console.log(error);
    }
    console.log(results);
    objects = results;
}

function draw()
{
    image(TV_image, 0, 0, 640, 350);

    if(Status  != "")
    {
        for(i = 0; i < object.length; i++)
        {
            document.getElementById("status").innerHTML = "Status : Objects Detected";

            fill("#FF0000");
            percent = floor(objects[i].confidence * 100);
            text(objects[i].label + " " + percent + "%" , objects[i].x , objects[i].y);
            noFill();
            stroke("#FF0000");
            rect(object[i].x, objects[i].y, objects[i].width, objects[i].heigth);
        }
    }
}