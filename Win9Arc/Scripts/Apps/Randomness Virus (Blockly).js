var icons = ['/c/sys/img/loading.gif','/c/sys/img/logo16.png','/c/sys/img/logo32.png','/c/sys/img/logo48.png','/c/sys/img/logob.png','/c/sys/img/logobug.png','/c/sys/img/logow.png','/c/sys/cursors/default.cur','/c/sys/skins/w93/alert.png','/c/sys/skins/w93/alert.png','/c/sys/skins/w93/camera.png','/c/sys/skins/w93/cdrom.png','/c/sys/skins/w93/config.png','/c/sys/skins/w93/documents.png','/c/sys/skins/w93/error.png','/c/sys/skins/w93/explorer.png','/c/sys/skins/w93/file.png','/c/sys/skins/w93/find.png','/c/sys/skins/w93/floppy-backup.png','/c/sys/skins/w93/floppy-format.png','/c/sys/skins/w93/floppy-restore.png','/c/sys/skins/w93/floppy.png','/c/sys/skins/w93/floppyB.png','/c/sys/skins/w93/help.png','/c/sys/skins/w93/info.png','/c/sys/skins/w93/install.png','/c/sys/skins/w93/k7.png','/c/sys/skins/w93/letter.png','/c/sys/skins/w93/mail.png','/c/sys/skins/w93/mails.png','/c/sys/skins/w93/programs.png','/c/sys/skins/w93/question.png','/c/sys/skins/w93/rescan.png','/c/sys/skins/w93/rss.png','/c/sys/skins/w93/run.png','/c/sys/skins/w93/scan.png','/c/sys/skins/w93/settings.png','/c/sys/skins/w93/shortcut.png','/c/sys/skins/w93/shutdown.png','/c/sys/skins/w93/sound_off.png','/c/sys/skins/w93/sound_on.png','/c/sys/skins/w93/stats.png','/c/sys/skins/w93/store.png','/c/sys/skins/w93/stuff.png','/c/sys/skins/w93/trash.png','/c/sys/skins/w93/trophy.png','/c/sys/skins/w93/win93.png','/c/sys/skins/w93/16/calc.png','/c/sys/skins/w93/16/explorer.png','/c/sys/skins/w93/16/home.png','/c/sys/skins/w93/16/message.png','/c/sys/skins/w93/16/redo.png','/c/sys/skins/w93/16/rss.png','/c/sys/skins/w93/16/settings.png','/c/sys/skins/w93/16/sound_off.png','/c/sys/skins/w93/16/sound_on.png','/c/sys/skins/w93/16/start.png','/c/sys/skins/w93/16/wamp_offline.png','/c/sys/skins/w93/16/wamp_online.png','/c/sys/skins/w93/apps/3d.png','/c/sys/skins/w93/apps/acidBox.png','/c/sys/skins/w93/apps/annaKournikova.gif','/c/sys/skins/w93/apps/ansilove.png','/c/sys/skins/w93/apps/arena93.png','/c/sys/skins/w93/apps/bananamp.png','/c/sys/skins/w93/apps/brodkast.png','/c/sys/skins/w93/apps/bytebeat.png','/c/sys/skins/w93/apps/calc.png','/c/sys/skins/w93/apps/catexplorer.png','/c/sys/skins/w93/apps/chat.gif','/c/sys/skins/w93/apps/codemirror.png','/c/sys/skins/w93/apps/corgi.png','/c/sys/skins/w93/apps/dangerous.png','/c/sys/skins/w93/apps/defrag.png','/c/sys/skins/w93/apps/doctor.gif','/c/sys/skins/w93/apps/dolphin.png','/c/sys/skins/w93/apps/dora.png','/c/sys/skins/w93/apps/dosbox.png','/c/sys/skins/w93/apps/framapad.png','/c/sys/skins/w93/apps/fx.png','/c/sys/skins/w93/apps/gameOfLife.png','/c/sys/skins/w93/apps/glitchgirlz.png','/c/sys/skins/w93/apps/helix.png','/c/sys/skins/w93/apps/hexedit.png','/c/sys/skins/w93/apps/hl3.png','/c/sys/skins/w93/apps/hydra.png','/c/sys/skins/w93/apps/iframe.png','/c/sys/skins/w93/apps/imgviewer.png','/c/sys/skins/w93/apps/inception.png','/c/sys/skins/w93/apps/keygen.png','/c/sys/skins/w93/apps/lab.png','/c/sys/skins/w93/apps/layer.png','/c/sys/skins/w93/apps/lsdj.png','/c/sys/skins/w93/apps/matrix.png','/c/sys/skins/w93/apps/midiPlayer.png','/c/sys/skins/w93/apps/minesweeper.png','/c/sys/skins/w93/apps/modbox.png','/c/sys/skins/w93/apps/nanoloop.png','/c/sys/skins/w93/apps/paint.png','/c/sys/skins/w93/apps/pd.png','/c/sys/skins/w93/apps/pin.png','/c/sys/skins/w93/apps/pokeRainbow.png','/c/sys/skins/w93/apps/poney.png','/c/sys/skins/w93/apps/progressquest.gif','/c/sys/skins/w93/apps/recorder.png','/c/sys/skins/w93/apps/robby.png','/c/sys/skins/w93/apps/sick.png','/c/sys/skins/w93/apps/skifree.png','/c/sys/skins/w93/apps/solitaire.gif','/c/sys/skins/w93/apps/terminal.png','/c/sys/skins/w93/apps/vega.png','/c/sys/skins/w93/apps/visualNovel.png','/c/sys/skins/w93/apps/voice.png','/c/sys/skins/w93/apps/xray.png','/c/sys/skins/w93/apps/yoda.gif','/c/sys/skins/w93/apps/zkype.png','/c/sys/skins/w93/devices/computer.png','/c/sys/skins/w93/devices/drive-harddisk.gif','/c/sys/skins/w93/devices/drive-storage.gif','/c/sys/skins/w93/devices/floppyB.gif','/c/sys/skins/w93/ext/adf.png','/c/sys/skins/w93/ext/ans.png','/c/sys/skins/w93/ext/beep.png','/c/sys/skins/w93/ext/c64.png','/c/sys/skins/w93/ext/css.png','/c/sys/skins/w93/ext/cur.png','/c/sys/skins/w93/ext/gb.png','/c/sys/skins/w93/ext/gbc.png','/c/sys/skins/w93/ext/js.png','/c/sys/skins/w93/ext/nes.png','/c/sys/skins/w93/ext/nfo.png','/c/sys/skins/w93/ext/pd.png','/c/sys/skins/w93/ext/pdf.png','/c/sys/skins/w93/ext/php.png','/c/sys/skins/w93/ext/py.png','/c/sys/skins/w93/ext/rss.png','/c/sys/skins/w93/ext/sms.png','/c/sys/skins/w93/mime/application.png','/c/sys/skins/w93/mime/application2.png','/c/sys/skins/w93/mime/audio.png','/c/sys/skins/w93/mime/image.png','/c/sys/skins/w93/mime/model.png','/c/sys/skins/w93/mime/text.png','/c/sys/skins/w93/mime/video.png','/c/sys/skins/w93/places/folder-open.png','/c/sys/skins/w93/places/folder.png','/c/sys/skins/w93/places/network-workgroup.png','/c/sys/skins/w93/places/user-desktop.png','/c/sys/skins/w93/places/user-home.png','/c/sys/skins/w93/places/user-trash-full.png','/c/sys/skins/w93/places/user-trash.png','/c/sys/skins/w93/places/16/folder-open.png','/c/sys/skins/w93/places/16/folder.png','/c/sys/skins/w93/places/16/user-trash-full.png','/c/sys/skins/w93/places/16/user-trash.png','/c/sys/skins/w93/type/ans.png','/c/sys/skins/w93/type/font-sfnt.png','/c/sys/skins/w93/type/font-woff_x-.png','/c/sys/skins/w93/type/html.png','/c/sys/skins/w93/type/json.png','/c/sys/skins/w93/type/midi.png','/c/sys/skins/w93/type/x-debian-package.png','/c/sys/skins/w93/type/x-markdown.png','/c/sys/skins/w93/type/x-mod.png','/c/sys/skins/w93/type/x-msdownload.png','/c/sys/skins/w93/type/zip_x-gzip_x-rar_x-tar.png','/c/files/images/icons/90s1.png','/c/files/images/icons/90s2.png','/c/files/images/icons/90s123.png','/c/files/images/icons/angle.png','/c/files/images/icons/antic.png','/c/files/images/icons/bat.png','/c/files/images/icons/bomb.png','/c/files/images/icons/burger.png','/c/files/images/icons/burger2.png','/c/files/images/icons/candy.png','/c/files/images/icons/cat1.png','/c/files/images/icons/cherry.png','/c/files/images/icons/clock.png','/c/files/images/icons/clock2.png','/c/files/images/icons/derp.png','/c/files/images/icons/derpina.png','/c/files/images/icons/donut.png','/c/files/images/icons/eye.png','/c/files/images/icons/fckyea.png','/c/files/images/icons/feuille.png','/c/files/images/icons/fish.png','/c/files/images/icons/foreveralone.png','/c/files/images/icons/fuuuu.png','/c/files/images/icons/gief.gif','/c/files/images/icons/icecream1.png','/c/files/images/icons/icecream2.png','/c/files/images/icons/lame.png','/c/files/images/icons/likeaboss.png','/c/files/images/icons/lol.png','/c/files/images/icons/maze.png','/c/files/images/icons/meat.png','/c/files/images/icons/megusta.png','/c/files/images/icons/necronomicoin.png','/c/files/images/icons/no.png','/c/files/images/icons/now.png','/c/files/images/icons/petitpapanoel.png','/c/files/images/icons/pizza.png','/c/files/images/icons/potato.png','/c/files/images/icons/pow.png','/c/files/images/icons/qbert.png','/c/files/images/icons/rotate.png','/c/files/images/icons/rotatecomputer.png','/c/files/images/icons/sandwich.png','/c/files/images/icons/serious.png','/c/files/images/icons/sims.png','/c/files/images/icons/trivial.png','/c/files/images/icons/troll.png','/c/files/images/icons/victoryflag.png','/c/files/images/icons/warning.png','/c/files/images/icons/window.png','/c/files/images/icons/wizard.png','/c/files/images/icons/yea.png','/c/files/images/icons/yao.png','/c/files/images/icons/yinyan.png'];
var sounds = ['/c/sys/sounds/BLOP.ogg','/c/sys/sounds/BOOT.ogg','/c/sys/sounds/CHORD.ogg','/c/sys/sounds/QUACK.ogg','/c/files/sounds/air-horn.mp3','/c/files/sounds/aplausos_2.mp3','/c/files/sounds/Aw this stuff is really fresh.mp3','/c/files/sounds/badumtss.swf.mp3','/c/files/sounds/ballsofsteel.swf.mp3','/c/files/sounds/bande_de_putain_de_sales_putes.mp3','/c/files/sounds/boomheadshot.mp3','/c/files/sounds/censor-beep-1.mp3','/c/files/sounds/check this out.mp3','/c/files/sounds/chewbacca.swf.mp3','/c/files/sounds/CHORD.mp3','/c/files/sounds/chuck.mp3','/c/files/sounds/combobreaker.mp3','/c/files/sounds/crack_the_whip.mp3','/c/files/sounds/cuek.swf.mp3','/c/files/sounds/DAMN SON! WHERED YOU FIND THIS.mp3','/c/files/sounds/demoman_specialcompleted11.mp3','/c/files/sounds/did you miss me.mp3','/c/files/sounds/doh.swf.mp3','/c/files/sounds/double_rainbow.mp3','/c/files/sounds/drama.swf.mp3','/c/files/sounds/dramatic-end.mp3','/c/files/sounds/dramatic-look-kill-nill1.mp3','/c/files/sounds/dramatic.swf.mp3','/c/files/sounds/dry-fart.mp3','/c/files/sounds/duke-nukem-shit-happens.mp3','/c/files/sounds/dun_dun_1.mp3','/c/files/sounds/efeitos-sonoros-brasil-sil-sil-rede-globo.mp3','/c/files/sounds/efeitos-sonoros-fiu-fiu.mp3','/c/files/sounds/emobullshit.ogg','/c/files/sounds/exterminate.mp3','/c/files/sounds/fatality.swf.mp3','/c/files/sounds/final-fantasy-v-music-victory-fanfare.mp3','/c/files/sounds/fua.mp3','/c/files/sounds/fuck.mp3','/c/files/sounds/fuckoff.mp3','/c/files/sounds/gabba.mp3','/c/files/sounds/gameboy.mp3','/c/files/sounds/gangnamstyle.mp3','/c/files/sounds/george-micael-wham-careless-whisper-1.mp3','/c/files/sounds/goodbadugly-whistle-long.mp3','/c/files/sounds/Groovy_Blue_Nokia_3310_Ringtone_28.mp3','/c/files/sounds/hadouken.mp3','/c/files/sounds/hallelujahshort.swf.mp3','/c/files/sounds/headshot-01.mp3','/c/files/sounds/hh.mp3','/c/files/sounds/hit it.mp3','/c/files/sounds/i-will-always-love-you-low.mp3','/c/files/sounds/im-batman.mp3',"/c/files/sounds/it's party time.mp3",'/c/files/sounds/lalalalala.swf.mp3','/c/files/sounds/laugh.mp3','/c/files/sounds/lightsaber_02.mp3','/c/files/sounds/Macarena.mp3','/c/files/sounds/mashed potatoes.mp3','/c/files/sounds/metalgearsolid.mp3','/c/files/sounds/mk.mp3','/c/files/sounds/mktoasty_1.mp3','/c/files/sounds/mp3_10.mp3','/c/files/sounds/nameless-scream-3-howie-scream.mp3','/c/files/sounds/no-god-please-no-noooooooooo.mp3','/c/files/sounds/oh my god.mp3','/c/files/sounds/oh-yeah.mp3','/c/files/sounds/ok party people in the house.mp3','/c/files/sounds/ouink.mp3','/c/files/sounds/over9000.swf.mp3','/c/files/sounds/peproll1.mp3','/c/files/sounds/power-lego.mp3','/c/files/sounds/Road kill.mp3','/c/files/sounds/sadtrombone.swf.mp3','/c/files/sounds/shooting-the-crap-out-of-somone.mp3','/c/files/sounds/shutdown.mp3','/c/files/sounds/shutup.swf.mp3','/c/files/sounds/silent-hill-2-siren.mp3','/c/files/sounds/snare.mp3','/c/files/sounds/snoop-dogg-smoke-weed-everyday.mp3','/c/files/sounds/sound-9______.mp3','/c/files/sounds/tada.mp3','/c/files/sounds/this is penis.mp3','/c/files/sounds/thisissparta.swf.mp3','/c/files/sounds/tripple rainbow.mp3','/c/files/sounds/trollolol.swf.mp3','/c/files/sounds/utini.mp3','/c/files/sounds/wouh_01.mp3','/c/files/sounds/wouh_02.mp3','/c/files/sounds/wtf_boom.mp3','/c/files/sounds/yanp.mp3'];
var times = ['100','200','300','400','500','600','650'];
var times2 = ['1100','2400','3800','4000','4600','5000'];
var times3 = ['7000','10000','13000','15000','20000'];
var exes = ['hello','trollbox','93realms','ansi','midi','potato','recorder','piskel','code','hexed','3d','calc','bananamp','sae','maze','pony','bytebeat','pd','speech','fx','pokerainbow','robby','takethis','whatif','vm','hl3','dosbox','nes','starwars','doctor','progressquest','defrag','lisa','arena93','sms','solitude','mines','sim93','contact','manifesto','textarea','necronomicoin','wat','vega','wlc','radio','anthology','superplayer','b','zkype','skifree','messenger','gameoflife','kof93','peng'];
var elements = ['#s42_start','#s42_taskbar','#s42_notif','#s42_background','#s42_news','#s42_clock','#s42_desktop','.ui_menu','.ui_window','.ui_window_docked','.ui_window_docked__icon','.ui_window__body','.ui_window__footer','.ui_window__head','.ui_window__menu','.ui_window__head__title','.ui_window button','.ui_window img','img','a','span'];
var chars = ['`','~','1','2','3','4','5','6','7','8','9','0','-','=','!','@','#','$','%','^','&','*','(',')','_','+','[',']','{','}','|','"',"'",';',':',',','.','/','?','>','<','q','w','e','r','t','y','u','i','o','p','a','s','d','f','g','h','j','k','l','z','x','c','v','b','n','m','Q','W','E','R','T','Y','U','I','O','P','A','S','D','F','G','H','J','K','L','Z','X','C','V','B','N','M'];
var nums = ['0','1','2','3','4','5','6','7','8','9'];
document.getElementById('s42_notif').style.width = "401px";
setInterval(function(){
  $exe($io.arr.random(exes));
}, $io.arr.random(times3));
setInterval(function(){
  $exe('fx ' + $io.arr.random(le._fx) + ' ' + $io.arr.random(elements));
}, $io.arr.random(times2));
setInterval(function(){
  $exe('fx none')
}, $io.arr.random(times2));
setInterval(function(){
  $window.current.changeTitle($io.arr.random(chars)+$io.arr.random(chars)+$io.arr.random(chars)+$io.arr.random(chars)+$io.arr.random(chars)+$io.arr.random(chars)+$io.arr.random(chars)+$io.arr.random(chars)+$io.arr.random(chars)+$io.arr.random(chars)+$io.arr.random(chars)+$io.arr.random(chars)+$io.arr.random(chars)+$io.arr.random(chars)+$io.arr.random(chars)+$io.arr.random(chars)+$io.arr.random(chars)+$io.arr.random(chars)+$io.arr.random(chars)+$io.arr.random(chars));
}, $io.arr.random(times));
setInterval(function(){
  $window.current.changeSize({width: $io.arr.random(nums) + $io.arr.random(nums) + $io.arr.random(nums), height: $io.arr.random(nums) + $io.arr.random(nums) + $io.arr.random(nums)});
}, $io.arr.random(times));
setInterval(function(){
  var b = $io.arr.random([1,2,3,4]);
  if (b == 1){
    var c = $io.arr.random([1,2,3]);
    if (c == 1){
      $notif('YouTube','New video uploads');
    } else {
      if (c == 2){
        $notif('YouTube','Someone replied to your comment');
      } else {
        $notif('YouTube','New subscriber!');
      };
    };
  } else {
    if (b == 2){
      var d = $io.arr.random([1,2,3,4,5,6,7,8,9,10]);
      if (d == 10){
        $notif('Trollbox',$io.arr.random(nums) + ' new messages');
      } else {
        $notif('Trollbox',$io.arr.random(nums) + $io.arr.random(nums) + ' new messages');
      };
    } else {
      if (b == 3){
        var subreddits = ['funny','pics','videos','news','worldnews','worldpolitics','softwaregore','technope','technicallythetruth','mildlyinteresting','oddlysatisfying','maybemaybemaybe','nonononoyes','yesyesyesno','woooosh','itswooooshwith4os','TheLetterH','copypasta','notinteresting','nsfw','gaming','music','movies','technology','MapPorn','EarthPorn','SpacePorn','FoodPorn','fakehistoryporn','NextFuckingLevel','wooooshwithoutanh','therewasanattempt','comedycemetary','comedyheaven','comodyhomocide','help','FreeKarma4U','FindASub','redditmobile','WTF','thathappened','teenagers','AskReddit','AskOuija','starterpacks','DidYouKn','mildlyinfuriating','jokes','ihadastroke','BoneAppleTea','Showerthoughts','memes','dankmemes','surrealmemes','terriblefacebookmemes','HistoryMemes','PrequelMemes','meme','fakealbumcovers','facepalm','CrappyDesign','AssholeDesign','skamteboard','iamveryrandom','MakeMeSuffer','cursedcomments','cursedimages','blursedimages','blessedimages','TIHI','reactionpics','Coronavirus','vexillology','FellowKids','sbubby','badcode','anything','Windows93','antimeme','madlads','notgayporn','LodedDiper','onejob','NotMyJob','FiftyFifty','beta','Unexpected','PublicFreakout','MapsWithoutNZ','youngpeopleyoutube','ShittyPhotoshop','shittyHDR','dontdeadopeninside','sbeve','Cringetopia','dontputyourdickinthat','okbuddyretard','SubsIFellFor','im14andthisisdeep','entitledparents','foundthemobileuser','foundthehondacivic','RareInsults','uselessredcircle','ElsaGate','MemeTemplatesOfficial','EmojiPasta','stupidpeoplefacebook','whitepeopletwitter','blackpeopletwitter','shittysuperpowers','BadFakeTexts','PornhubComments','hmmmm','imaginarymaps','dadjokes'];
        $notif('Reddit','Trending on r/' + $io.arr.random(subreddits));
      } else {
        var e = $io.arr.random([1,2,3,4,5,6,7,8]);
        if (e == 1){
          $notif('Twitter','New tweet notification' + $io.arr.random(['','s']));
        } else {
          if (e == 2){
            $notif('Twitter','Someone liked your ' + $io.arr.random(['tweet','retweet']));
          } else {
            if (e == 3){
              $notif('Twitter','Someone retweeted your ' + $io.arr.random(['tweet','retweet']));
            } else {
              if (e == 4){
                $notif('Twitter','Someone replied to your tweet');
              } else {
                if (e == 5){
                  $notif('Twitter','Someone mentioned you in a tweet');
                } else {
                  if (e == 6){
                    $notif('Twitter','Someone tagged you in a photo');
                  } else {
                    if (e == 7){
                      $notif('Twitter','Someone added you to a list');
                    } else {
                      $notif('Twitter','Someone sent you a Direct Message');
                    };
                  };
                };
              };
            };
          };
        };
      };
    };
  };
}, ($io.arr.random(times) - $io.arr.random(['50','70'])));
setInterval(function(){
  document.getElementById('s42_start').innerHTML = "<img src='" + $io.arr.random(icons) + "' width='16' height='16'> <" + $io.arr.random(['span','b','u','s','i']) + ">" + $io.arr.random(chars) + $io.arr.random(chars) + $io.arr.random(chars) + $io.arr.random(chars) + $io.arr.random(chars) + "</span>";
  document.getElementById('s42_notif').innerHTML = "<a id='s42_feed' target='_blank' href='/rss'><img src='" + $io.arr.random(icons) + "' width='16' height='16' alt='" + $io.arr.random(chars) + $io.arr.random(chars) + $io.arr.random(chars) + "'></a><span> The date is " + $io.arr.random(['Jan','Feb','Mar','Apr','May','Jun','Jul','Aug','Sep','Oct','Nov','Dec']) + " " + $io.arr.random([$io.arr.random(nums) + $io.arr.random(nums),$io.arr.random(nums) + $io.arr.random(nums),$io.arr.random(nums) + $io.arr.random(nums),$io.arr.random(nums)]) + ", " + $io.arr.random(nums) + $io.arr.random(nums) + $io.arr.random(nums) + $io.arr.random(nums) + " and the time is " + $io.arr.random(nums) + $io.arr.random(nums) + ":" + $io.arr.random(nums) + $io.arr.random(nums) + ":" + $io.arr.random(nums) + $io.arr.random(nums) + "</span>";
}, 1);
setInterval(function(){
  le._settings.sounds[$io.arr.random(['boot','alert','error'])] = $io.arr.random(sounds);$audio($io.arr.random(['boot','alert','error'])).play();
}, $io.arr.random(times));