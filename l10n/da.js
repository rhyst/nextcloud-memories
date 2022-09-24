OC.L10N.register(
    "memories",
    {
    "Memories" : "Minder",
    "Yet another photo management app" : "Endnu en fotostyringsapp",
    "# Memories\n\n* **📸 Photo and Video Timeline**: Sorts photos by date taken, parsed from Exif data.\n* **🤔 Quick Recap**: Jump to anywhere in the timeline instantly.\n* **🖼️ Folders**: Browse your and shared folders with a similar, efficient timeline.\n* **🎦 Slideshow**: View photos from your timeline and folders easily.\n* **📱 Mobile Support**: Relive your memories on devices of any shape and size through the web app.\n* **🗑️ Recycle**: Select and delete multiple photos and videos at once.\n* **⚡️ Fast**: Memories is extremely fast. Period.\n\n## 🚀 Installation\n\n1. Install the app from the Nextcloud app store\n1. ⚒️ Install `exiftool` (see below).\n1. Run `php ./occ memories:index` to generate metadata indices for existing photos.\n1. Open the 📷 Memories app in Nextcloud and set the directory containing your photos. Photos from this directory will be displayed in the timeline, including any photos in nested subdirectories.\n1. Installing the [preview generator](https://github.com/rullzer/previewgenerator) for pre-generating thumbnails is strongly recommended.\n\n## 🔨 Installing Dependencies\nThe exact steps depend on your Nextcloud platform. If you use Docker for your Nextcloud instance, you can install Exiftool by using a custom docker image.\n- **Ubuntu/Debian**: `sudo apt install libimage-exiftool-perl`\n- **Fedora**: `sudo dnf install perl-Image-ExifTool`\n- **Arch Linux**: `sudo pacman -S perl-image-exiftool`\n- **Alpine**: `apk add --no-cache exiftool`\n- **MacOS**: `brew install exiftool`\n- **FreeBSD**: `sudo pkg install p5-Image-ExifTool`" : "# Minder\n\n* **📸 Foto- og videotidslinje**: Sorterer billeder efter dato taget, parset fra Exif-data.\n* **🤔 Hurtig opsummering**: Hop til hvor som helst på tidslinjen med det samme.\n* **🖼️ Mapper**: Gennemse dine og delte mapper med en lignende, effektiv tidslinje.\n* **🎦 Slideshow**: Se nemt fotos fra din tidslinje og mapper.\n* **📱 Mobilsupport**: Genoplev dine minder på enheder af enhver form og størrelse gennem webappen.\n* **🗑️ Genbrug**: Vælg og slet flere billeder og videoer på én gang.\n* **⚡️ Hurtig**: Erindringer er ekstremt hurtige. Periode.\n\n## 🚀 Installation\n\n1. Installer appen fra Nextcloud App Store\n1. ⚒️ Installer `exiftool` (se nedenfor).\n1. Kør `php ./occ memories:index` for at generere metadataindekser for eksisterende fotos.\n1. Åbn 📷 Memories-appen i Nextcloud, og indstil mappen, der indeholder dine billeder. Billeder fra denne mappe vil blive vist på tidslinjen, inklusive fotos i indlejrede undermapper.\n1. Det anbefales kraftigt at installere [preview-generatoren](https://github.com/rullzer/previewgenerator) til forudgenerering af thumbnails.\n\n## 🔨 Installation af afhængigheder\nDe nøjagtige trin afhænger af din Nextcloud-platform. Hvis du bruger Docker til din Nextcloud-instans, kan du installere Exiftool ved at bruge et brugerdefineret docker-image.\n- **Ubuntu/Debian**: `sudo apt install libimage-exiftool-perl`\n- **Fedora**: `sudo dnf install perl-Image-ExifTool`\n- **Arch Linux**: `sudo pacman -S perl-image-exiftool`\n- **Alpine**: `apk add --no-cache exiftool`\n- **MacOS**: `brew install exiftool`\n- **FreeBSD**: `sudo pkg install p5-Image-ExifTool`",
    "Timeline" : "Tidslinje",
    "Folders" : "Mapper",
    "Favorites" : "Favoritter",
    "Videos" : "Videoer",
    "Settings" : "Indstillinger",
    "Cannot find this photo anymore!" : "Kan ikke finde dette billede længere!",
    "Timeline Path" : "Tidslinjesti",
    "Show hidden folders" : "Vis skjulte mapper",
    "Update" : "Opdater",
    "Error updating settings" : "Fejl under opdatering af indstillinger",
    "Cancel" : "Annuller",
    "Delete" : "Slet",
    "Download" : "Download",
    "Favorite" : "Favorit",
    "No photos to show here" : "Ingen billeder at vise her",
    "Failed to load some photos" : "Kunne ikke indlæse nogle billeder",
    "{n} selected" : "{n} valgt",
    "You are about to download a large number of files. Are you sure?" : "Du er ved at downloade et stort antal filer. Er du sikker?",
    "You are about to delete a large number of files. Are you sure?" : "Du er ved at slette et stort antal filer. Er du sikker?",
    "Failed to delete files." : "Kunne ikke slette filer.",
    "Failed to delete {fileName}." : "Kunne ikke slette {fileName}.",
    "Failed to favorite {fileName}." : "Kunne ikke vælge favorit {fileName}",
    "Failed to favorite files." : "Kunne ikke vælge favorit filer."
},
"nplurals=2; plural=(n != 1);");