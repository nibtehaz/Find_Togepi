// Bismillahir Rahmanir Rahim
// Rabbi Zidni Ilma


var levelCompleted;
var level = 1 ;
var point = 0 ;
var togepiAddress = 'img\\togepi.png'
var otherAddress = ['img\\pikachu1.png','img\\pikachu2.png','img\\pikachu3.png','img\\pikachu4.png','img\\pichu1.png','img\\piplup1.png','img\\piplup2.png','img\\jiggli.png','img\\maril.png','img\\chikorita.png'];
var togepiDiv;
var togepiImage;
var otherDiv;
var otherImage;
var randomLeft;
var randomTop;
var randomIndex;
var threshold=2;
var firstTime = 1 ;
var bodyElement;
var periodicity;
var speedVariance=3;
var speedMean=1;
var refreshRate=200 ;

function setGameLayout()
{
    document.getElementById("currentLevel").innerHTML="Level : " + level.toString();

    speedMean = Math.floor(level/3)+1;
    speedVariance = 2*speedMean + 1 ;

    if(firstTime==1)
    {
        //alert("Togepi is a very simple minded playful baby pokemon\nTogepi wants to play all the time\nAnd while playing Togepi often gets lost\nPlease help us to find the baby Togepi");
        firstTime=0;
    }

    var test;

    levelCompleted = 0 ;

    // setting Togepi

    togepiDiv = document.createElement("div");

    randomLeft = Math.floor(Math.random()*90);
    //console.log(randomLeft.toString());
    togepiDiv.style.left = randomLeft.toString() + "%"  ;

    randomTop = Math.floor(Math.random()*80);
    //console.log(randomTop.toString());
    togepiDiv.style.top = randomTop.toString() + "%" ;

    togepiDiv.className="Togepi";

    togepiImage = document.createElement("img");
    togepiImage.setAttribute("src",togepiAddress);
    togepiImage.className="Togepi";



    togepiDiv.appendChild(togepiImage);

    document.getElementById('gameBody').appendChild(togepiDiv);

    // setting others

    for(var j=0;j<=level;j++)
    {
        otherDiv = document.createElement("div");

        randomLeft = Math.floor(Math.random()*90);
        randomTop = Math.floor(Math.random()*80);

        otherDiv.style.left = randomLeft.toString() + "%"  ;
        otherDiv.style.top = randomTop.toString() + "%" ;
        otherDiv.className="Other";

        otherImage = document.createElement("img");
        randomIndex = Math.floor(Math.random()*10)
        otherImage.setAttribute("src",otherAddress[randomIndex]);
        otherImage.className="Other";

        otherDiv.appendChild(otherImage);

        document.getElementById('gameBody').appendChild(otherDiv);
    }

    periodicity = setInterval(dynamicGameLayout,refreshRate);
}

function dynamicGameLayout()
{
    bodyElement = document.getElementById('gameBody');
    //console.log(bodyElement.childNodes);

    for(var i=0;i<bodyElement.childNodes.length;i++)
    {
        if(bodyElement.childNodes[i].nodeName=="DIV")
        {
            var numStr = bodyElement.childNodes[i].style.left;
            var num =0 ;

            //console.log(numStr);

            for(var j=0;;j++)
            {
                if(numStr[j]=='%')
                {
                    break;
                }
                else
                {
                    num = num*10 + (numStr[j] - '0');
                }
            }

            //console.log(num);

            num = num + Math.floor(Math.random()*(speedVariance)) - speedMean ;
            bodyElement.childNodes[i].style.left = num.toString() + "%" ;


            var numStr = bodyElement.childNodes[i].style.top;
            var num =0 ;

            //console.log(numStr);

            for(var j=0;;j++)
            {
                if(numStr[j]=='%')
                {
                    break;
                }
                else
                {
                    num = num*10 + (numStr[j] - '0');
                }
            }

            //console.log(num);

            num = num + Math.floor(Math.random()*(speedVariance)) - speedMean ;
            bodyElement.childNodes[i].style.top = num.toString() + "%" ;

        }

    }
}

function clicked()
{
    //alert(event.target.className);
    if(event.target.className=="Togepi")
    {
        alert("Thank You!!\nYou've found Togepi");
        levelCompleted=1;
        deleteAll();
        level++;
        setGameLayout();
    }

    else
    {
        alert("That's not a Togepi :(\nPlease look more carefully");
    }
}

function deleteAll()
{
    bodyElement = document.getElementById('gameBody');
    //console.log(bodyElement.childNodes);

    for(var i=0;i<bodyElement.childNodes.length;i++)
    {
        if(bodyElement.childNodes[i].nodeName=="DIV")
        {
            bodyElement.removeChild(bodyElement.childNodes[i]);
            i=-1;
        }
    }
}
