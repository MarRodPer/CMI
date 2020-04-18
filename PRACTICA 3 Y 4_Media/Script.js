function Movie_OnStart(){
StackTrace="On Start";
SoundPlay("Musica",true);
VideoSetVolume("video",0);

}

function Frame__0_0(ID){
StackTrace="Scene 1 Frame 0";
Pause();

}

function Frame__1_0(ID){
StackTrace="Scene 2 Frame 0";
Pause();


}

function Iraescenaaudio_OnClick(){
StackTrace="Ir a escena audio.On Click";
GotoSceneNameAndPlay("Scene2",0);
SoundPlay("sonido",false);
}

function PausePlayVídeo_OnClick(){
StackTrace="PausePlay Vídeo.On Click";
VideoPause("video");
SoundPlay("sonido",false);
}

function PausePlayVídeo_OnRelease(){
StackTrace="PausePlay Vídeo.On Release";
VideoResume("video");
SoundPlay("sonido",false);
}

function MusicVideo_OnClick(){
StackTrace="MusicVideo.On Click";
VideoSetVolume("video",100);
SoundPlay("sonido",false);

}

function MusicVideo_OnRelease(){
StackTrace="MusicVideo.On Release";
VideoSetVolume("video",0);
SoundPlay("sonido",false);
}

function Iraescenavídeo_OnClick(){
StackTrace="Ir a escena vídeo.On Click";
GotoSceneNameAndPlay("Scene1",0);
SoundPlay("sonido",false);
}

function PausePlayMúsica_OnClick(){
StackTrace="PausePlay Música.On Click";
SoundPause("Musica");
SoundPlay("sonido",false);
}

function PausePlayMúsica_OnRelease(){
StackTrace="PausePlay Música.On Release";
SoundResume("Musica");
SoundPlay("sonido",false);
}

