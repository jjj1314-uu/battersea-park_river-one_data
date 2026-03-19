let battersea;
let wandle;


async function setup() {
    createCanvas(1500, 1500);
    battersea = await loadTable('assets/Battersea Air Edit.csv', ',', 'header');
    wandle = await loadTable('assets/River Wandle Air Data CSV NEW.csv', ',', 'header');
    noLoop();
}

function draw() {
background(103, 124, 153);
//console.log(cols[0])
//fill("rgb(93, 176, 212)")
let cent = 750
let peak = 700
    let numRows = battersea.getRowCount();
    let gap = 5.5;
    let heightMod = 0.5;
//console.log(battersea. rows[0])
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
        stroke(14, 23, 79);
        fill(14, 23, 79);
        beginShape();
        vertex(y, x);
        vertex(Y, X);
        vertex(cent, 220 +([i+1]*gap));
        vertex(cent, 220 + (i*gap));
        endShape();
    }

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
        vertex(cent, 220 +([i+1]*gap));
        vertex(cent, 220 + (i*gap));
        endShape();
    }

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
        vertex(cent, 220 +([i+1]*gap));
        vertex(cent, 220 + (i*gap));
        endShape();
    }

    let temp = battersea.getColumn('temp');
    for (let i = 0; i < numRows -2; i++) {
        let x = 220 + (i * gap);
        let y = peak+10 - (temp[i]);
        let X = 220 + ((i + 1) * gap);
        let Y = peak+10 - (temp[i + 1]);
        stroke(51, 108, 158)
        fill(51, 108, 158);
        beginShape();
        vertex(y, x);
        vertex(Y, X);
        vertex(cent, 220 +([i+1]*gap));
        vertex(cent, 220 + (i*gap));
        endShape();
    }

    let pm2 = battersea.getColumn('pm2p5');
    for (let i = 0; i < numRows -2; i++) {
        let x = 220 + (i * gap);
        let y = peak+20 - (pm2[i]);
        let X = 220 + ((i + 1) * gap);
        let Y = peak+20 - (pm2[i + 1]);
        stroke(78, 131, 166)
        fill(78, 131, 166);
        beginShape();
        vertex(y, x);
        vertex(Y, X);
        vertex(cent, 220 +([i+1]*gap));
        vertex(cent, 220 + (i*gap));
        endShape();
    }

    let pm1 = battersea.getColumn('pm1');
    for (let i = 0; i < numRows -2; i++) {
        let x = 220 + (i * gap);
        let y = peak+35 - (pm1[i]);
        let X = 220 + ((i + 1) * gap);
        let Y = peak+35 - (pm1[i + 1]);
        stroke(101, 142, 168)
        fill(101, 142, 168);
        beginShape();
        vertex(y, x);
        vertex(Y, X);
        vertex(cent, 220 +([i+1]*gap));
        vertex(cent, 220 + (i*gap));
        endShape();
    }

    let nox = battersea.getColumn('nox');
    for (let i = 0; i < numRows -2; i++) {
        let x = 220 + (i * gap);
        let y = peak + 45- (nox[i]);
        let X = 220 + ((i + 1) * gap);
        let Y = peak + 45 - (nox[i + 1]);
        stroke(128, 168, 209)
        fill(128, 168, 209);
        beginShape();
        vertex(y, x);
        vertex(Y, X);
        vertex(cent, 220 +([i+1]*gap));
        vertex(cent, 220 + (i*gap));
        endShape();
    }


    let numRowsW = wandle.getRowCount();
    let gapW = 18.6;
        let vocW = wandle.getColumn('voc');
    // numRows includes header; and we go to i + 1;
    // so let's go to numRows - 1 (header) - 1 (for the i+1)
    for (let i = 0; i < numRowsW - 2; i++) {
        let x = 220 + (i * gapW);
        let y = peak-65 - (vocW[i])/2;
        let X = 220 + ((i + 1) * gapW);
        let Y = peak-65 - (vocW[i + 1])/2;
        stroke(4, 43, 5)
        fill(4, 43, 5);
        beginShape();
        vertex(750, x);
        vertex(750, X);
        vertex(cent+(cent-Y), 220 +([i+1]*gapW));
        vertex(cent+(cent-y), 220 + (i*gapW));
        endShape();
    }

    let humiW = wandle.getColumn('humidity');
    for (let i = 0; i < numRowsW -2; i++) {
        let x = 220 + (i * gapW);
        let y = peak+10 - (humiW[i]*2);
        let X = 220 + ((i + 1) * gapW);
        let Y = peak+10 - (humiW[i + 1]*2);
        stroke(7, 61, 9)
        fill(7, 61, 9);
        beginShape();
        vertex(750, x);
        vertex(750, X);
        vertex(cent+(cent-Y), 220 +([i+1]*gapW));
        vertex(cent+(cent-y), 220 + (i*gapW));
        endShape();
    }

    let co2W = wandle.getColumn('co2');
    for (let i = 0; i < numRowsW -2; i++) {
        let x = 220 + (i * gapW);
        let y = (peak - (co2W[i])/12);
        let X = 220 + ((i + 1) * gapW);
        let Y = (peak - (co2W[i + 1])/12);
        stroke(36, 99, 38)
        fill(36, 99, 38);
        beginShape();
        vertex(750, x);
        vertex(750, X);
        vertex(cent+(cent-Y), 220 +([i+1]*gapW));
        vertex(cent+(cent-y), 220 + (i*gapW));
        endShape();
    }

    let tempW = wandle.getColumn('temp');
    for (let i = 0; i < numRowsW -2; i++) {
        let x = 220 + (i * gapW);
        let y = peak+10 - (tempW[i]);
        let X = 220 + ((i + 1) * gapW);
        let Y = peak+10 - (tempW[i + 1]);
        stroke(56, 120, 68)
        fill(56, 120, 68);
        beginShape();
        vertex(750, x);
        vertex(750, X);
        vertex(cent+(cent-Y), 220 +([i+1]*gapW));
        vertex(cent+(cent-y), 220 + (i*gapW));
        endShape();
    }

    let pm2W = wandle.getColumn('pm2p5');
    for (let i = 0; i < numRowsW -2; i++) {
        let x = 220 + (i * gapW);
        let y = peak+20 - (pm2W[i]);
        let X = 220 + ((i + 1) * gapW);
        let Y = peak+20 - (pm2W[i + 1]);
        stroke(82, 156, 84)
        fill(82, 156, 84);
        beginShape();
        vertex(750, x);
        vertex(750, X);
        vertex(cent+(cent-Y), 220 +([i+1]*gapW));
        vertex(cent+(cent-y), 220 + (i*gapW));
        endShape();
    }

    let pm1W = wandle.getColumn('pm1');
    for (let i = 0; i < numRowsW -2; i++) {
        let x = 220 + (i * gapW);
        let y = peak+35 - (pm1W[i]);
        let X = 220 + ((i + 1) * gapW);
        let Y = peak+35 - (pm1W[i + 1]);
        stroke(114, 179, 116)
        fill(114, 179, 116);
        beginShape();
        vertex(750, x);
        vertex(750, X);
        vertex(cent+(cent-Y), 220 +([i+1]*gapW));
        vertex(cent+(cent-y), 220 + (i*gapW));
        endShape();
    }

    let noxW = wandle.getColumn('nox');
    for (let i = 0; i < numRowsW -2; i++) {
        let x = 220 + (i * gapW);
        let y = peak + 45- (noxW[i]);
        let X = 220 + ((i + 1) * gapW);
        let Y = peak + 45 - (noxW[i + 1]);
        stroke(151, 191, 152)
        fill(151, 191, 152);
        beginShape();
        vertex(750, x);
        vertex(750, X);
        vertex(cent+(cent-Y), 220 +([i+1]*gapW));
        vertex(cent+(cent-y), 220 + (i*gapW));
        endShape();
    }

push()
noStroke()
//voc
fill(14, 23, 79);
rect(400, 1330, 40, 60);
    beginShape()
    vertex(595, 1244);
    vertex(610, 1244);
    vertex(440, 1330);
    vertex(400, 1330);
    endShape()
rect(400, 90, 40, 60);
    beginShape()
    vertex(400, 150);
    vertex(440, 150);
    vertex(595, 220);
    vertex(595, 220);
    endShape()
//humi
fill(3, 41, 115);
rect(450, 1330, 40, 60);
    beginShape()
    vertex(620, 1244);
    vertex(655, 1244);
    vertex(490, 1330);
    vertex(450, 1330);
    endShape()
rect(450, 65, 40, 85);
    beginShape()
    vertex(450, 150);
    vertex(490, 150);
    vertex(660, 220);
    vertex(605, 220);
    endShape()
//co2
fill(9, 75, 133);
rect(500, 1330, 40, 60)
    beginShape()
    vertex(665, 1244);
    vertex(687, 1244);
    vertex(540, 1330);
    vertex(500, 1330);
    endShape()
rect(500, 90, 40, 60);
    beginShape()
    vertex(500, 150);
    vertex(540, 150);
    vertex(690, 220);
    vertex(670, 220);
    endShape()
//temp
fill(51, 108, 158);
rect(550, 1330, 40, 60)
    beginShape()
    vertex(695, 1244);
    vertex(712, 1244);
    vertex(590, 1330);
    vertex(550, 1330);
    endShape()
rect(550, 40, 40, 110);
    beginShape()
    vertex(550, 150);
    vertex(590, 150);
    vertex(710, 220);
    vertex(700, 220);
    endShape()
//pm2
fill(78, 131, 166);
rect(600, 1330, 40, 60);
    beginShape()
    vertex(720, 1244);
    vertex(728, 1244);
    vertex(640, 1330);
    vertex(600, 1330);
    endShape()
rect(600, 80, 40, 70);
    beginShape()
    vertex(600, 150);
    vertex(640, 150);
    vertex(725, 220);
    vertex(718, 220);
    endShape()
//pm1
fill(101, 142, 168);
rect(650, 1330, 40, 60);
    beginShape()
    vertex(735, 1244);
    vertex(740, 1244);
    vertex(690, 1330);
    vertex(650, 1330);
    endShape()
rect(650, 90, 40, 60);
    beginShape()
    vertex(650, 150);
    vertex(690, 150);
    vertex(740, 220);
    vertex(733, 220);
    endShape()
//nox
fill(128, 168, 209);
rect(700, 1330, 40, 60);
    beginShape()
    vertex(746, 1244);
    vertex(748, 1244);
    vertex(740, 1330);
    vertex(700, 1330);
    endShape()
rect(700, 90, 40, 60);
    beginShape()
    vertex(700, 150);
    vertex(740, 150);
    vertex(748, 220);
    vertex(746, 220);
    endShape()
pop()

push()
noStroke()
//vocW
fill(4, 43, 5);
rect(1050, 1330, 40, 60);
    beginShape()
    vertex(895, 1244);
    vertex(897, 1244);
    vertex(1090, 1330);
    vertex(1050, 1330);
    endShape()
rect(1050, 90, 40, 60);
    beginShape()
    vertex(1050, 150);
    vertex(1090, 150);
    vertex(917, 220);
    vertex(886, 220);
    endShape()
//humiW
fill(7, 61, 9);
rect(1000, 1330, 40, 60);
    beginShape()
    vertex(846, 1244);
    vertex(885, 1244);
    vertex(1040, 1330);
    vertex(1000, 1330);
    endShape()
rect(1000, 65, 40, 85);
    beginShape()
    vertex(1000, 150);
    vertex(1040, 150);
    vertex(876, 220);
    vertex(845, 220);
    endShape()
//co2W
fill(36, 99, 38);
rect(950, 1330, 40, 60)
    beginShape()
    vertex(815, 1244);
    vertex(836, 1244);
    vertex(990, 1330);
    vertex(950, 1330);
    endShape()
rect(950, 90, 40, 60);
    beginShape()
    vertex(950, 150);
    vertex(990, 150);
    vertex(835, 220);
    vertex(820, 220);
    endShape()
//tempW
fill(56, 120, 68);
rect(900, 1330, 40, 60)
    beginShape()
    vertex(794, 1244);
    vertex(808, 1244);
    vertex(940, 1330);
    vertex(900, 1330);
    endShape()
rect(900, 40, 40, 110);
    beginShape()
    vertex(900, 150);
    vertex(940, 150);
    vertex(809, 220);
    vertex(787, 220);
    endShape()
//pm2W
fill(82, 156, 84);
rect(850, 1330, 40, 60);
    beginShape()
    vertex(775, 1244);
    vertex(788, 1244);
    vertex(890, 1330);
    vertex(850, 1330);
    endShape()
rect(850, 80, 40, 70);
    beginShape()
    vertex(850, 150);
    vertex(890, 150);
    vertex(777, 220);
    vertex(770, 220);
    endShape()
//pm1W
fill(114, 179, 116);
rect(800, 1330, 40, 60);
    beginShape()
    vertex(760, 1244);
    vertex(768, 1244);
    vertex(840, 1330);
    vertex(800, 1330);
    endShape()
rect(800, 90, 40, 60);
    beginShape()
    vertex(840, 150);
    vertex(800, 150);
    vertex(758, 220);
    vertex(762, 220);
    endShape()
//noxW
fill(151, 191, 152);
rect(750, 1330, 40, 60);
    beginShape()
    vertex(752, 1244);
    vertex(754, 1244);
    vertex(790, 1330);
    vertex(750, 1330);
    endShape()
rect(750, 90, 40, 60);
    beginShape()
    vertex(750, 150);
    vertex(790, 150);
    vertex(754, 220);
    vertex(752, 220);
    endShape()
pop()
for (let i=0; i < numRows-1; i++) {
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
noStroke()
fill(103, 124, 153, 50);
rect(400, 150, 690, 70);
rect(400, 40, 690, 180);
rect(400, 1244, 690, 86);
rect(400, 1244, 690, 146);
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
125.6`, 405, 1350);
text(`27.5
67.5
45.4`, 460, 1350);
text(`387
938
418.9`, 505, 1350);
text(`13.8
26.8
18.6`, 560, 1350);
text(`0.8
5.8
2.1`, 610, 1350);
text(`0.3
5
1.1`, 660, 1350);
text(`1
1
1`, 715, 1350);

text(`40
137
82.1`, 1060, 1350);
text(`32
52.1
40.9`, 1005, 1350);
text(`423
510
441.5`, 955, 1350);
text(`17.8
25.8
21.7`, 905, 1350);
text(`1.8
21.9
7.5`, 860, 1350);
text(`1.1
10.3
3.6`, 810, 1350);
text(`1
1
1`, 767, 1350);
text(`MIN
MAX
MODE`, 340, 1350);
pop()

push();
stroke(255);
fill(255);
angleMode(DEGREES)
textMode(CENTER)
translate(width/2, height/2);
rotate(270);
text('VOC', 615, -325)
text('Humidity', 615, -275)
text('Co2', 615, -225)
text('Temperature', 615, -175)
text('pm2p5', 615, -125)
text('pm1', 615, -75)
text('NOX', 615, -25)
stroke(4, 43, 5);
strokeWeight(2)
fill(14, 23, 79);
textSize(42)
text('BATTERSEA PARK', 100, -450)
pop();

push();
stroke(255);
fill(255);
angleMode(DEGREES)
textMode(CENTER)
translate(width/2, height/2);
rotate(90);
text('VOC', -645, -315)
text('Humidity', -670, -265)
text('Co2', -645, -215)
text('Temperature', -695, -165)
text('pm2p5', -655, -115)
text('pm1', -645, -65)
text('NOX', -645, -15)
stroke(4, 43, 5);
strokeWeight(2)
fill(4, 43, 5);
textSize(42)
text('RIVER WANDLE', 100, -450)
pop();

// stroke(220)
// line(cent+(cent-572), 920, cent+(cent-572), 1275)
// line(cent+(cent-622), 920, cent+(cent-622), 1275)

//time,pm2p5,co2,temp,humidity,voc,nox,pm1
}


