le._apps.fortnite = {
    categories: "Game;Shooter",
    name: "Fortnite 2: Royale Ultimate",
    icon: "https://img1.yeggi.com/images_q/2809923/fortnite---logo-by-lukas1272",
    exec: function(){
      var verbs = [
          "Buying",
        "Using",
        "Breaking",
        "Fixing",
        "Smashing",
        "Changing",
        "Mailing",
        "Upgrading",
        "Charging",
        "Pointing",
        "Zooming",
        "Pressing",
        "Snapping",
        "Working",
        "Erasing",
        "Writing",
        "Cutting",
        "Pasting",
        "Saving",
        "Loading",
        "Checking",
        "Rewriting",
        "Plugging",
        "Playing",
        "Burning",
        "Ripping",
        "Dragging",
        "Dropping",
        "Zipping",
        "Unzipping",
        "Locking",
        "Filling",
        "Calling",
        "Finding",
        "Viewing",
        "Coding",
        "Jamming",
        "Unlocking",
        "Surfing",
        "Scrolling",
        "Pausing",
        "Clicking",
        "Crossing",
        "Cracking",
        "Switching",
        "Updating",
        "Naming",
        "Reading",
        "Tuning",
        "Printing",
        "Scanning",
        "Sending",
        "Faxing",
        "Renaming",
        "Touching",
        "Bringing",
        "Paying",
        "Watching",
        "Turning",
        "Leaving",
        "Stopping",
        "Formatting"
        ];

        var preNames = [
          "Adobe",
          "super",
          "random",
          "Microsoft",
          "virtual",
          "MOAR",
          "less",
          "Google",
          "pizza",
          "GNU",
          "3D",
          "NVIDIA",
          "Voodoo 3D",
          "3dfx",
          "MEGA",
          "Mozilla",
          "facebook",
          "ultimate",
          "last",
          "next level",
          "wizard",
          "unkwown",
          "hacked",
          "spammed",
          "trojan",
          "data",
          "securised",
          "unsecurised",
          "Valve",
          "epic",
          "over9000",
          "shader",
          "script",
          "module",
          "kitten",
          "teh",
          "lol",
          "troll",
          "meme",
          "software",
          "hardware",
          "half of",
          "first",
          "last",
          "c++",
          "system",
          "VR",
          "emoji",
          "sudo",
          "user",
          "scene",
          "clock",
          "polygon",
          "overclocked",
          "Radeon",
          "Pro SSG",
          "AMD",
          "ultra HD",
          "PRO",
          "perfect-match",
          "high-end",
          "TITAN X",
          "low-cost",
          "GTX",
          "Pascal-powered",
          "Geforce",
          "new",
          "extreme",
          "fury",
          "furry",
          "R4",
          "nano",
          "memory",
          "gaming",
          "8GB",
          "Tri-X",
          "gaming edition",
          "CERN",
          "Nintendo",
          "Gabe Newell's",
          "video game",
          "GoldSrc",
          "John Carmack's",
          "encrypted",
          "forked",
          "fasted",
          "slowed",
          "modded",
          "updated",
          "major",
          "minor",
          "alpha",
          "beta",
          "hard-coded",
          "modern",
          "Steam",
          "OpenGL",
          "SDL",
          "handled",
          "game developer's",
          "Vulkan",
          "Source 2",
          "workshop",
          "static",
          "porn",
          "lag-compensated",
          "hight dynamic range",
          "scalable",
          "facial",
          "pre-computed",
          "auto-generated",
          "skeletal",
          "inversed",
          "signifiant",
          "keyframed",
          "Gentoo",
          "QuickTime",
        ];

        var names = [
          "GPU",
          "CPU",
          "VRAM",
          "anti-aliasing",
          "frame buffer",
          "code",
          "bot",
          "API",
          "laptop",
          "development kit",
          "reality",
          "SDK",
          "tool",
          "3d",
          "model",
          "client",
          "source",
          "branch",
          "build",
          "core",
          "Orange Box",
          "cat",
          "episode",
          "mod",
          "dog",
          "connectors",
          "Quake engine",
          "address",
          "algorithm",
          "email",
          "c++",
          "data",
          "database",
          "document",
          "disk operating system",
          "desktop",
          "ENIAC",
          "electricity",
          "moar ram",
          "attachment",
          "online server",
          "datacenter",
          "explorer",
          "filesystem",
          "file allocation table",
          "pizza",
          "pizza.dll",
          "player",
          "folder",
          "footnotes",
          "freeware",
          "firewall",
          "file",
          "teh internet",
          "format",
          "freeBSD",
          "FTP",
          "Gimp",
          "GNU",
          "hacker",
          "4chan",
          "hard disk",
          "hardware",
          "software",
          "hash_function",
          "cookie",
          "java",
          "kernel",
          "system32.dll (are you sure?) ",
          "keyboard",
          "mouse",
          "link",
          "licensing examples for computer software",
          "live cd",
          "malware",
          "Macintosh",
          "md5",
          "media",
          "megabyte",
          "spam",
          "spammer",
          "scam",
          "scammer",
          "monitor",
          "motherboard",
          "Mozilla Firefox web browser",
          "network",
          "computer",
          "page",
          "Perl script",
          "script",
          "program",
          "release",
          "printer",
          "GPS",
          "PDF",
          "pop up",
          "plug-in",
          "python",
          "random access memory",
          "read only memory",
          "root",
          "Recycle Bin",
          "scan",
          "engine",
          "search engine",
          "shareware",
          "spreadsheet",
          "stylesheet",
          "super computer",
          "super user",
          "SDK",
          "trojan",
          "trojan horse",
          "Ubuntu",
          "update",
          "user",
          "USB",
          "version",
          "virtual community",
          "Visual Basic",
          "virus",
          "vulnerability",
          "window",
          "Wine",
          "X32",
          "X64",
          "Yahoo!",
          "ZIP",
          "like a boss",
          "manager",
          "setup",
          "Service Pack 1",
          "Service Pack 2",
          "Service Pack 3",
          "shit",
          "virus",
          "particule",
          "module",
          "panda",
          "corgi",
          "generator",
          "Half Life 3",
          "Gabe Newell",
          "center",
          "CD-ROM",
          "Source 3",
          "porn",
          "youtuber",
          "steam",
          "pokemon go",
          "home",
          "overclock",
          "graphic card",
          "Team Fortress",
          "milf",
          "Left 4 Dead",
          "linux support",
        ];

        var that = this;
        var image = new Image();
        image.src = "https://i.imgur.com/PGoC9Ao.png";
      image.width = "400";
      image.height = "500";
        image.className = "ui_layout_center app_imageviewer__img";
        image.onload = load;
        image.onerror = load;
        image.onabort = load;

        function load() {
          $window.call(that, {
            header: false,
            title: "Fortnite 2",
            icon: "https://img1.yeggi.com/images_q/2809923/fortnite---logo-by-lukas1272",
            maximizable: false,
            resizable: false,
            draggable: false,
            contextmenuOnBody: true,
            center: true,
            baseClass: "ui_desktop_layer app_hl3",
            baseHeight: image.height,
            baseWidth: image.width,
            html: image,
            onopen: function(win) {
              var body = this.el.body;
              setTimeout(function() {
                var title = document.createElement("div");
                var text = document.createElement("div");
                var wait = document.createElement("div");
                title.innerHTML =
                  '<h1 style="font-size:45px;margin:0;position:relative">Fortnite <sup style="position:absolute;line-height:1;font-size:16px;top:7px">2</sup></h1><div style="margin-top:3px">CONFIRMED!!!1!!<div>';
                text.textContent = "...";
                wait.textContent = "Please wait";
                title.style.cssText =
                  "font-size:12px;font-family:arial,sans serif;color:#fff;text-align:center;position:absolute;top:42px;left:1%;right:1%";
                text.style.cssText =
                  "font-size:12px;font-family:arial,sans serif;color:#fff;text-align:center;position:absolute;bottom:132px;left:1%;right:1%";
                wait.style.cssText =
                  "font-size:12px;font-family:arial,sans serif;color:#999;text-align:center;position:absolute;bottom:116px;left:1%;right:1%";
                body.appendChild(title);
                body.appendChild(text);
                body.appendChild(wait);

                function chance(p) {
                  return Math.random() * 100 >= (p || 50) ? false : true;
                }

                function init() {
                  if (chance()) {
                    text.textContent =
                      $io.arr.random(verbs) +
                      " " +
                      $io.arr.random(preNames) +
                      " " +
                      $io.arr.random(preNames) +
                      " " +
                      $io.arr.random(names) +
                      "...";
                  } else {
                    text.textContent =
                      $io.arr.random(verbs) +
                      " " +
                      $io.arr.random(preNames) +
                      " " +
                      $io.arr.random(names) +
                      "...";
                  }
                  setTimeout(init, Math.random() * 2000);
                }

                init();
              }, 0);
            },
          });
        }
    }
  }