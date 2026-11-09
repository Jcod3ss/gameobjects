nn.on('load',() =>{
  kaplay({
    focus:false,
    background:[255,0,255]
  })
  //sprites
  const sprite1 = add([
   //rect(50,70),
    circle(60),
    pos(100,100),
    area(),
    color(100,200,255),
    "sprite1"
  ])
  loadBean();
  const bean = add([
    sprite("bean"),
    pos(500,500),
    'bean'
  ])
  const label = make([
    rect(400,200),
    pos(400,500),
    color(BLACK)
  ]);
  label.add([
    text("Hello WOrld!"),
  ]);
  add(label)


loadSprite("cat","assets/kat.png")
const cat = add([
  sprite("cat"),
  pos(120,80)
])
loadSprite("green","assets/greenface_sprite,png",{
  sliceX: 4,
  sliceY:2,
  anims:{
    idle:{
      from:0,
      to: 8,
    }
  }
});
  const green = add([
    spirte("green"),
    pos(200,100)
  ])
  green.onAnimEnd((anim) => {
    if(anim === "idle"){
      green.play("idle")
    }
  });
  //green.play("idle")
  
  //music
  loadMusic("bg", "assets/bgmusic.wav");
  laodSound("beanV","assets/bean_voice.wav");
  
  //text
  add([
    text("oh [blue]hi[/blue]",{
      size:48,
      width: 300,
      font:"sans-serif",
      styles:{
        "blue":{
          color:rgb(0,110,255),
        }
      }
    }),
    color(0,255,0),
    pos(200,600),
  ])
})