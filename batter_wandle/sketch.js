let battersea;
//let wandle;


async function setup() {
    createCanvas(1500, 1500);
    battersea = await loadTable('assets/Battersea Air Edit.csv', ',', 'header');
    noLoop();
}

function draw() {
background(86, 113, 148);
//console.log(cols[0])
//fill("rgb(93, 176, 212)")
let cent = 750
let peak = 700
    //console.log(battersea)
    //console.log(battersea.pm2p5);
    let numRows = battersea.getRowCount();
    let gap = 5.5;
    let heightMod = 0.5;

textSize(16)
stroke(0);
fill(0);
text('Time', 340, 175);
stroke(200,0,0, 150);
fill(200, 0, 0, 150);
text('Location', 1100, 175);

    let voc = battersea.getColumn('voc');
    // numRows includes header; and we go to i + 1;
    // so let's go to numRows - 1 (header) - 1 (for the i+1)
    for (let i = 0; i < numRows - 2; i++) {
        let x = 220 + (i * gap);
        let y = peak-65 - (voc[i])/2;
        let X = 220 + ((i + 1) * gap);
        let Y = peak-65 - (voc[i + 1])/2;
        stroke(14, 23, 79)
        fill(14, 23, 79);
        beginShape();
        vertex(y, x);
        vertex(Y, X);
        vertex(cent+(cent-Y), X);
        vertex(cent+(cent-y), x);
        endShape();
    }
//text('VOC', 390, 200);

    let humi = battersea.getColumn('humidity');
    for (let i = 0; i < numRows -2; i++) {
        let x = 220 + (i * gap);
        let y = peak+10 - (humi[i]*2);
        let X = 220 + ((i + 1) * gap);
        let Y = peak+10 - (humi[i + 1]*2);
        stroke(3, 41, 115)
        fill(3, 41, 115);
        beginShape();
        vertex(y, x);
        vertex(Y, X);
        vertex(cent+(cent-Y), X);
        vertex(cent+(cent-y), x);
        endShape();
    }
// //text('Humidity', 440, 200);

    let co2 = battersea.getColumn('co2');
    for (let i = 0; i < numRows -2; i++) {
        let x = 220 + (i * gap);
        let y = (peak - (co2[i])/12);
        let X = 220 + ((i + 1) * gap);
        let Y = (peak - (co2[i + 1])/12);
        stroke(9, 75, 133)
        fill(9, 75, 133);
        beginShape();
        vertex(y, x);
        vertex(Y, X);
        vertex(cent+(cent-Y), X);
        vertex(cent+(cent-y), x);
        endShape();
    }
// //text('Co2', 515, 200);

    let temp = battersea.getColumn('temp');
    for (let i = 0; i < numRows -2; i++) {
        let x = 220 + (i * gap);
        let y = peak+10 - (temp[i]);
        let X = 220 + ((i + 1) * gap);
        let Y = peak+10 - (temp[i + 1]);
        stroke(12, 106, 135)
        fill(12, 106, 135);
        beginShape();
        vertex(y, x);
        vertex(Y, X);
        vertex(cent+(cent-Y), X);
        vertex(cent+(cent-y), x);
        endShape();
    }
// //text('Temperature', 555, 200);

    let pm2 = battersea.getColumn('pm2p5');
    for (let i = 0; i < numRows -2; i++) {
        let x = 220 + (i * gap);
        let y = peak+20 - (pm2[i]);
        let X = 220 + ((i + 1) * gap);
        let Y = peak+20 - (pm2[i + 1]);
        stroke(58, 133, 112)
        fill(58, 133, 112);
        beginShape();
        vertex(y, x);
        vertex(Y, X);
        vertex(cent+(cent-Y), X);
        vertex(cent+(cent-y), x);
        endShape();
    }
// //text('pm2p5', 660, 200);

    let pm1 = battersea.getColumn('pm1');
    for (let i = 0; i < numRows -2; i++) {
        let x = 220 + (i * gap);
        let y = peak+35 - (pm1[i]);
        let X = 220 + ((i + 1) * gap);
        let Y = peak+35 - (pm1[i + 1]);
        stroke(56, 120, 68)
        fill(56, 120, 68);
        beginShape();
        vertex(y, x);
        vertex(Y, X);
        vertex(cent+(cent-Y), X);
        vertex(cent+(cent-y), x);
        endShape();
    }
// //text('pm1', 725, 200);

    let nox = battersea.getColumn('nox');
    for (let i = 0; i < numRows -2; i++) {
        let x = 220 + (i * gap);
        let y = peak + 45- (nox[i]);
        let X = 220 + ((i + 1) * gap);
        let Y = peak + 45 - (nox[i + 1]);
        stroke(9, 102, 93)
        fill(9, 102, 93);
        beginShape();
        vertex(y, x);
        vertex(Y, X);
        vertex(cent+(cent-Y), X);
        vertex(cent+(cent-y), x);
        endShape();
    }
//text('NOX', 770, 200);

push()
noStroke()
fill(14, 23, 79);

rect(1045, 1330, 40, 60);
    beginShape()
    vertex(895, 1250);
    vertex(905, 1250);
    vertex(1085, 1330);
    vertex(1045, 1330);
    endShape()
rect(405, 90, 40, 60);
    beginShape()
    vertex(405, 150);
    vertex(445, 150);
    vertex(595, 220);
    vertex(595, 220);
    endShape()
fill(3, 41, 115);

rect(995, 1330, 40, 60);
    beginShape()
    vertex(840, 1250);
    vertex(885, 1250);
    vertex(1035, 1330);
    vertex(995, 1330);
    endShape()
rect(455, 65, 40, 85);
    beginShape()
    vertex(455, 150);
    vertex(495, 150);
    vertex(660, 220);
    vertex(605, 220);
    endShape()
fill(9, 75, 133);

rect(945, 1330, 40, 60)
    beginShape()
    vertex(815, 1250);
    vertex(830, 1250);
    vertex(985, 1330);
    vertex(945, 1330);
    endShape()
rect(505, 90, 40, 60);
    beginShape()
    vertex(505, 150);
    vertex(545, 150);
    vertex(690, 220);
    vertex(670, 220);
    endShape()
fill(12, 106, 135);

rect(895, 1330, 40, 60)
    beginShape()
    vertex(785, 1250);
    vertex(805, 1250);
    vertex(935, 1330);
    vertex(895, 1330);
    endShape()
rect(555, 40, 40, 110);
    beginShape()
    vertex(555, 150);
    vertex(595, 150);
    vertex(710, 220);
    vertex(700, 220);
    endShape()
fill(58, 133, 112);

rect(845, 1330, 40, 60);
    beginShape()
    vertex(770, 1250);
    vertex(777, 1250);
    vertex(885, 1330);
    vertex(845, 1330);
    endShape()
rect(605, 80, 40, 70);
    beginShape()
    vertex(605, 150);
    vertex(645, 150);
    vertex(725, 220);
    vertex(718, 220);
    endShape()
fill(56, 120, 68);

rect(795, 1330, 40, 60);
    beginShape()
    vertex(758, 1250);
    vertex(762, 1250);
    vertex(835, 1330);
    vertex(795, 1330);
    endShape()
rect(655, 90, 40, 60);
    beginShape()
    vertex(655, 150);
    vertex(695, 150);
    vertex(740, 220);
    vertex(733, 220);
    endShape()
fill(9, 102, 93);

rect(745, 1330, 40, 60);
    beginShape()
    vertex(748, 1250);
    vertex(752, 1250);
    vertex(785, 1330);
    vertex(745, 1330);
    endShape()
rect(705, 90, 40, 60);
    beginShape()
    vertex(705, 150);
    vertex(745, 150);
    vertex(752, 220);
    vertex(748, 220);
    endShape()
// pop()
// push()
// noStroke()
// fill(86, 113, 148)
// rect(0, 1220, 592,50)
// pop()
for (let i=0; i < numRows; i++) {
        let x = 220 + (i * gap);
        let y = 400;
        let X = 220 + (i * gap);
        let Y = 1100;
if (i==2 || i==13 || i==22 || i==31 || i==38 || i==44 || i==50 || i==56 || i==69 || i==79 || i==86 || i==127 || i==133 || i==141 || i==148 || i==155 || i==160 || i==166 || i==181 || i==186) {
    stroke(200, 0, 0, 150); 
        line(y, x, Y+10, X);
} else {
        stroke(200, 50);
        line(y, x, Y, X);

}
    stroke(200, 0, 0, 150)
    fill(200, 0, 0, 150)
    textSize(14)
    let loca = 1130
text('1', loca, 223 + gap*2);
text('2', loca, 223 + gap*13);
text('3', loca, 223 + gap*22);
text('4', loca, 223 + gap*31);
text('5', loca, 223 + gap*38);
text('6', loca, 223 + gap*44);
text('7', loca, 223 + gap*50);
text('8', loca, 223 + gap*56);
text('9', loca, 223 + gap*69);
text('10', loca, 223 + gap*79);
text('11', loca, 223 + gap*86);
text('12', loca, 223 + gap*127);
text('13', loca, 223 + gap*133);
text('14', loca, 223 + gap*141);
text('15', loca, 223 + gap*148);
text('16', loca, 223 + gap*155);
text('17', loca, 223 + gap*160);
text('18', loca, 223 + gap*166);
text('19', loca, 223 + gap*181);
text('20', loca, 223 + gap*186);


}

let date = battersea.getColumn('time');
//console.log(date);
for (let i =1; i < numRows; i = i+10) {
    
    let tempDate = new Date(date[i]);
    let h = tempDate.getHours();
    let m = tempDate.getMinutes();
    let timeString = h + ":" + m; 
    ///console.log(timeString)
    stroke(20)
    fill(20)
    textSize(14)
text(timeString, 340,223+ i*gap)
line(390, 220 + i*gap, 1100, 220 + i*gap)
}
push()
noStroke()
fill(255);
textSize(12)
text(`40
480
125.6`, 1050, 1350);
text(`27.5
67.5
45.4`, 1000, 1350);
text(`387
938
418.9`, 950, 1350);
text(`13.8
26.8
18.6`, 900, 1350);
text(`0.8
5.8
2.1`, 850, 1350);
text(`0.3
5
1.1`, 800, 1350);
text(`1
1
1`, 750, 1350);
text(`min
max
mode`, 700, 1350);
pop()

push();
stroke(255);
fill(255);
angleMode(DEGREES)
textMode(CENTER)
translate(width/2, height/2);
rotate(270);
text('VOC', 615, -320)
text('Humidity', 615, -270)
text('Co2', 615, -220)
text('Temperature', 615, -170)
text('pm2p5', 615, -120)
text('pm1', 615, -70)
text('NOX', 615, -20)

pop();
// stroke(220)
// line(cent+(cent-572), 920, cent+(cent-572), 1275)
// line(cent+(cent-622), 920, cent+(cent-622), 1275)

//time,pm2p5,co2,temp,humidity,voc,nox,pm1
}


