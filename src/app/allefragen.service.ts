import { Injectable } from '@angular/core';
import { Frage, Antwort } from './allefragen';
/* import { McFrage } from './mc-frage';
import { ScFrage } from './sc-frage';
import { FillinFrage } from './fillin-frage'; */


@Injectable({
  providedIn: 'root'
})
export class AllefragenService {
  // Mcquestions: McFrage[]
  // Scquestions: ScFrage[]
  // fiquestions: FillinFrage[]
  allquestions: Frage[]

  constructor() {
    this.allquestions = [
      {
        fid:1,
        ftyp:"single",
        frage:['Which type of file system is created by mkfs when it is executed with the block device name only and without any additional parameters?'],
        antworten:[
          {text:'A. XFS', correct: false},
          {text:'B. VFAT', correct: false},
          {text:'C. ext2', correct: true},
          {text:'D. ext3', correct: false},
          {text:'E. ext4', correct: false},
        ],
        richtig: ["C"]
      },
      {
        fid:2,
        ftyp:"single",
        frage:['Which umask value ensures that new directories can be read, written and listed by their owning user, read and listed by their owning group and are not accessible at all for everyone else?'],
        antworten:[
          {text:'A. 0750', correct: false},
          {text:'B. 0027', correct: true},
          {text:'C. 0036', correct: false},
          {text:'D. 7640', correct: false},
          {text:'E. 0029', correct: false},
        ],
        richtig: ["B"]
      },
      {
        fid:3,
        ftyp:"single",
        frage:['Which of the following commands changes the number of days before the ext3 filesystem on /dev/sda1 has to run through a full filesystem check while booting?'],
        antworten:[
          {text:'A. tune2fs -d 200 /dev/sda1', correct: false},
          {text:'B. tune2fs -i 200 /dev/sda1', correct: true},
          {text:'C. tune2fs -c 200 /dev/sda1', correct: false},
          {text:'D. tune2fs -n 200 /dev/sda1', correct: false},
          {text:'E. tune2fs --days 200 /dev/sda1', correct: false},
        ],
        richtig: ["B"]
      },
      {
        fid:4,
        ftyp:"single",
        frage:['Which is the default percentage of reserved space for the root user on new ext4 filesystems?'],
        antworten:[
          {text:'A. 10%', correct: false},
          {text:'B. 3%', correct: false},
          {text:'C. 15%', correct: false},
          {text:'D. 0%', correct: false},
          {text:'E. 5%', correct: true},
        ],
        richtig: ["E"]
      },
      {
        fid:5,
        ftyp:"single",
        frage:['Which of the following is true when a file system, which is neither listed in /etc/fstab nor known to system, is mounted manually?'],
        antworten:[
          {text:'A. systemd ignores any manual mounts which are not done using the systemctl mount command', correct: false},
          {text:'B. The command systemctl mountsync can be used to create a mount unit based on the existing mount', correct: false},
          {text:'C. systemd automatically generates a mount unit and monitors the mount point without changing it', correct: true},
          {text:'D. Unless a systemd mount unit is created, systemd unmounts the file system after a short period of time', correct: false},
          {text:'E. systemctl unmount must be used to remove the mount because system opens a file descriptor on the mount point', correct: false},
        ],
        richtig: ["C"]
      },
      {
        fid:6,
        ftyp:"fillin",
        frage:['Which program updates the database that is used by the locate command? (Specify ONLY the command without any path or parameters).'],
        antworten:[
          {text:'updatedb', correct: true},
        ],
        richtig: ['updatedb']
      },
      {
        fid:7,
        ftyp:"single",
        frage:['What does the command mount --bind do?'],
        antworten:[
          {text:'A. It makes the contents of one directory available in another directory', correct: true},
          {text:'B. It mounts all available filesystems to the current directory', correct: false},
          {text:'C. It mounts all user mountable filesystems to the user’s home directory', correct: false},
          {text:'D. It mounts all file systems listed in /etc/fstab which have the option userbindset', correct: false},
          {text:'E. It permanently mounts a regular file to a directory', correct: false},
        ],
        richtig: ["A"]
      },
      {
        fid:8,
        ftyp:"single",
        frage:['Consider the following output from the command ls -i: \n 525385 a.txt \n How would a new file named c.txt be created with the same inode number as a.txt (Inode 525385)?'],
        antworten:[
          {text:'A. ln -h a.txt c.txt', correct: false},
          {text:'B. ln c.txt a.txt', correct: false},
          {text:'C. ln a.txt c.txt', correct: true},
          {text:'D. ln -f c.txt a.txt', correct: false},
          {text:'E. ln -i 525385 c.txt', correct: false},
        ],
        richtig: ["C"]
      },
      {
        fid:9,
        ftyp:"multi",
        frage: ['Consider the following directory:\n drwxrwxr-x 2 root sales 4096 Jan 1 15:21 sales \n Which command ensures new files created within the directory sales are owned by the group sales?\n (Choose two.)'],
        antworten: [
          {text: 'A.  chmod g+s sales', correct: true},
          {text: 'B.  setpol -R newgroup=sales sales', correct: false},
          {text: 'C.  chgrp -p sales sales', correct: false},
          {text: 'D.  chown --persistent *.sales sales', correct: false},
          {text: 'E.  chmod 2775 sales', correct: true},
        ],
        richtig: ["A","E"]
      },
      {
        fid:10,
        ftyp:"multi",
        frage: ['In order to display all currently mounted filesystems, which of the following commands could be used?\n (Choose two.)'],
        antworten: [
          {text: 'A.  cat /proc/self/mounts', correct: true},
          {text: 'B.  free', correct: false},
          {text: 'C.  lsmounts', correct: false},
          {text: 'D.  mount', correct: true},
          {text: 'E.  cat /proc/filesystems', correct: false},
        ],
        richtig: ["A","D"]
      },
      {
        fid:11,
        ftyp:"fillin",
        frage:['Which command displays the current disk space usage for all mounted file systems? (Specify ONLY the command without any path or parameters.)'],
        antworten:[
          {text:'df', correct: true},
        ],
        richtig: ['df']
      },
      {
        fid:12,
        ftyp:"single",
        frage:['Which chown command changes the ownership to dave and the group to staff on a file named data.txt?'],
        antworten:[
          {text:'A. chown dave/staff data.txt', correct: false},
          {text:'B. chown -u dave -g staff data.txt', correct: false},
          {text:'C. chown --user dave --group staff data.txt', correct: false},
          {text:'D. chown dave+staff data.txt', correct: false},
          {text:'E. chown dave:staff data.txt', correct: true},
        ],
        richtig: ["E"]
      },
      {
        fid:13,
        ftyp:"single",
        frage:['When considering the use of hard links, what are valid reasons not to use hard links?'],
        antworten:[
          {text:'A. Hard links are not available on all Linux systems because traditional filesystems, such as ext4, do not support them', correct: false},
          {text:'B. Each hard link has individual ownership, permissions and ACLs which can lead to unintended disclosure of file content', correct: false},
          {text:'C. Hard links are specific to one filesystem and cannot point to files on another filesystem', correct: true},
          {text:'D. If users other than root should be able to create hard links, suln has to be installed and configured', correct: false},
          {text:'E. When a hard linked file is changed, a copy of the file is created and consumes additional space', correct: false},
        ],
        richtig: ["C"]
      },
      {
        fid:14,
        ftyp:"single",
        frage:['In compliance with the FHS, in which of the directories are man pages found?'],
        antworten:[
          {text:'A. /opt/man/', correct: false},
          {text:'B. /usr/doc/', correct: false},
          {text:'C. /usr/share/man/', correct: true},
          {text:'D. /var/pkg/man', correct: false},
          {text:'E. /var/man/', correct: false},
        ],
        richtig: ["C"]
      },
      {
        fid:15,
        ftyp:"fillin",
        frage:['Which file in the /proc filesystem lists parameters passed from the bootloader to the kernel? (Specify the file name only without any path.)'],
        antworten:[
          {text:'cmdline', correct: true},
        ],
        richtig: ['cmdline']
      },
      {
        fid:16,
        ftyp:"single",
        frage:['What is the process ID number of the init process on a System V init based system?'],
        antworten:[
          {text:'A. -1', correct: false},
          {text:'B. 0', correct: false},
          {text:'C. 1', correct: true},
          {text:'D. It is different with each reboot', correct: false},
          {text:'E. It is set to the current run level', correct: false},
        ],
        richtig: ["C"]
      },
      {
        fid:17,
        ftyp:"single",
        frage:['Which daemon handles power management events on a Linux system?'],
        antworten:[
          {text:'A. acpid', correct: true},
          {text:'B. batteryd', correct: false},
          {text:'C. pwrmgntd', correct: false},
          {text:'D. psd', correct: false},
          {text:'E. inetd', correct: false},
        ],
        richtig: ["A"]
      },
      {
        fid:18,
        ftyp:"multi",
        frage:['Which of the following statements are true about the boot sequence of a PC using a BIOS?\n (Choose two.)'],
        antworten:
        [
          {text:'A. Some parts of the boot process can be configured from the BIOS',correct: true},
          {text:'B. Linux does not require the assistance of the BIOS to boot a computer',correct: false},
          {text:'C. The BIOS boot process starts only if secondary storage, such as the hard disk, is functional',correct: false},
          {text:'D. The BIOS initiates the boot process after turning the computer on',correct: true},
          {text: 'E. The BIOS is started by loading hardware drivers from secondary storage, such as the hard disk',correct: false}
        ],
        richtig: ["A","D"]
      },
      {
        fid:19,
        ftyp:"multi",
        frage:['What is true regarding UEFI firmware?\n (Choose two.)'],
        antworten:
        [
          {text:'A. It can read and interpret partition tables',correct: true},
          {text:'B. It can use and read certain file systems',correct: true},
          {text:'C. It stores its entire configuration on the /boot/ partition',correct: false},
          {text:'D. It is stored in a special area within the GPT metadata',correct: false},
          {text:'E. It is loaded from a fixed boot disk position', correct: false},
        ],
        richtig: ["A","B"]
      },
      {
        fid:20,
        ftyp:"single",
        frage:['A faulty kernel module is causing issues with a network interface card. \n Which of the following actions ensures that this module is not loaded automatically when the system boots?'],
        antworten:[
          {text:'A. Using lsmod --remove --autocleanwithout specifying the name of a specific module', correct: false},
          {text:'B. Using modinfo -kfollowed by the name of the offending module', correct: false},
          {text:'C. Using modprobe -rfollowed by the name of the offending module', correct: false},
          {text:'D. Adding a blacklist line including the name of the offending module to the file /etc/modprobe.d/blacklist.conf', correct: true},
          {text:'E. Deleting the kernel module’s directory from the file system and recompiling the kernel, including its modules', correct: false},
        ],
        richtig: ["D"]
      },
      {
        fid:21,
        ftyp:"multi",
        frage:['When is the content of the kernel ring buffer reset?\n (Choose two.)'],
        antworten:
        [
          {text:'A. When the ring buffer is explicitly reset using the command dmesg --clear',correct: true},
          {text:'B. When the ring buffer is read using dmesg without any additional parameters',correct: false},
          {text:'C. When a configurable amount of time, 15 minutes by default, has passed',correct: false},
          {text:'D. When the kernel loads a previously unloaded kernel module',correct: false},
          {text:'E. When the system is shut down or rebooted',correct: true},
        ],
        richtig: ["A","E"]
      },
      {
        fid:22,
        ftyp:"single",
        frage:['What is the first program the Linux kernel starts at boot time when using System V init?'],
        antworten:[
          {text:'A. /lib/init.so', correct: false},
          {text:'B. /proc/sys/kernel/init', correct: false},
          {text:'C. /etc/rc.d/rcinit', correct: false},
          {text:'D. /sbin/init', correct: true},
          {text:'E. /boot/init', correct: false},
        ],
        richtig: ["D"]
      },
      {
        fid:23,
        ftyp:"single",
        frage:['A Debian package creates several files during its installation. \n Which of the following commands searches for packages owning the file /etc/debian_version?'],
        antworten:[
          {text:'A. apt-get search /etc/debian_version', correct: false},
          {text:'B. apt -r /etc/debian_version', correct: false},
          {text:'C. find /etc/debian_version -dpkg', correct: false},
          {text:'D. dpkg -S  /etc/debian_version', correct: true},
          {text:'E. apt-file /etc/debian_version', correct: false},
        ],
        richtig: ["D"]
      },
      {
        fid:24,
        ftyp:"single",
        frage:['What is contained on the EFI System Partition?'],
        antworten:[
          {text:'A. The Linux root file system', correct: false},
          {text:'B. The first stage boot loader', correct: true},
          {text:'C. The default swap space file', correct: false},
          {text:'D. The Linux default shell binaries', correct: false},
          {text:'E. The user home directories', correct: false},
        ],
        richtig: ["B"]
      },
      {
        fid:25,
        ftyp:"multi",
        frage:['Which of the following directories on a 64 bit Linux system typically contain shared libraries?\n (Choose two.)'],
        antworten:
        [
          {text:'A. ~/.lib64/',correct: false},
          {text:'B. /usr/lib64/',correct: true},
          {text:'C. /var/lib64/',correct: false},
          {text:'D. /lib64/',correct: true},
          {text:'E. /opt/lib64/', correct: false},
        ],
        richtig: ["B","D"]
      },
      {
        fid:26,
        ftyp:"multi",
        frage:['Which of the following files exist in a standard GRUB 2 installation?\n (Choose two.)'],
        antworten:
        [
          {text:'A. /boot/grub/stages/stage0',correct: false},
          {text:'B. /boot/grub/i386-pc/lvm.mod',correct: true},
          {text:'C. /boot/grub/fstab',correct: false},
          {text:'D. /boot/grub/grub.cfg',correct: true},
          {text:'E. /boot/grub/linux/vmlinuz',correct: false},
        ],
        richtig: ["B","D"]
      },
      {
        fid:27,
        ftyp:"single",
        frage:['Which of the following commands installs all packages with a name ending with the string foo?'],
        antworten:[
          {text:'A. zypper get "*foo"', correct: false},
          {text:'B. zypper update "foo?"', correct: false},
          {text:'C. zypper force "foo*"', correct: false},
          {text:'D. zypper install "*foo"', correct: true},
          {text:'E. zypper add ".*foo"', correct: false},
        ],
        richtig: ["D"]
      },
      {
        fid:28,
        ftyp:"multi",
        frage:['Which of the following properties of a Linux system should be changed when a virtual machine is cloned?\n (Choose two.)'],
        antworten:
        [
          {text:'A. The partitioning scheme',correct: false},
          {text:'B. The file system',correct: false},
          {text:'C. The D-Bus Machine ID',correct: true},
          {text:'D. The permissions of /root/',correct: false},
          {text:'E. The SSH host keys',correct: true},
        ],
        richtig: ["C","E"]
      },
      {
        fid:29,
        ftyp:"single",
        frage:['Which of the following commands installs GRUB 2 into the master boot record on the third hard disk?'],
        antworten:[
          {text:'A. grub2 install /dev/sdc', correct: false},
          {text:'B. grub-mkrescue /dev/sdc', correct: false},
          {text:'C. grub-mbrinstall /dev/sdc', correct: false},
          {text:'D. grub-setup /dev/sdc', correct: false},
          {text:'E. grub-install /dev/sdc', correct: true},
        ],
        richtig: ["E"]
      },
      {
        fid:30,
        ftyp:"single",
        frage:['Which of the following partition types is used for Linux swap spaces when partitioning hard disk drives?'],
        antworten:[
          {text:'A. 7', correct: false},
          {text:'B. 82', correct: true},
          {text:'C. 83', correct: false},
          {text:'D. 8e', correct: false},
          {text:'E. fd', correct: false},
        ],
        richtig: ["B"]
      },
      {
        fid:31,
        ftyp:"multi",
        frage:['What is true regarding the configuration of yum?\n (Choose two.)'],
        antworten:
        [
          {text:'A. Changes to the repository configuration become active after running yum confupdate',correct: false},
          {text:'B. Changes to the yum configuration become active after restarting the yumd service',correct: false},
          {text:'C. The configuration of package repositories can be divided into multiple files',correct: true},
          {text:'D. Repository configurations can include variables such as $basearch or $releasever',correct: true},
          {text:'E. In case /etc/yum.repos.d/ contains files, /etc/yum.config ignored',correct: false},
        ],
        richtig: ["C","D"]
      },
      {
        fid:32,
        ftyp:"single",
        frage:['Which of the following apt-get subcommands installs the newest versions of all currently installed packages?'],
        antworten:[
          {text:'A. auto-update', correct: false},
          {text:'B. dist-upgrade', correct: true},
          {text:'C. full-upgrade', correct: false},
          {text:'D. install', correct: false},
          {text:'E. update', correct: false},
        ],
        richtig: ["B"]
      },
      {
        fid:33,
        ftyp:"single",
        frage:['Which command uninstalls a package but keeps its configuration files in case the package is re-installed?'],
        antworten:[
          {text:'A. dpkg -s pkgname', correct: false},
          {text:'B. dpkg -L pkgname', correct: false},
          {text:'C. dpkg -P pkgname', correct: false},
          {text:'D. dpkg -v pkgname', correct: false},
          {text:'E. dpkg -r pkgname', correct: true},
        ],
        richtig: ["E"]
      },
      {
        fid:34,
        ftyp:"single",
        frage:['Which of the following commands lists the dependencies of the RPM package file foo.rpm?'],
        antworten:[
          {text:'A. rpm -qpR foo.rpm', correct: true},
          {text:'B. rpm -dep foo', correct: false},
          {text:'C. rpm -ld foo.rpm', correct: false},
          {text:'D. rpm -R foo.rpm', correct: false},
          {text:'E. rpm -pD foo', correct: false},
        ],
        richtig: ["A"]
      },
      {
        fid:35,
        ftyp:"single",
        frage:['What is the maximum niceness value that a regular user can assign to a process with the nice command when executing a new process?'],
        antworten:[
          {text:'A. 9', correct: false},
          {text:'B. 15', correct: false},
          {text:'C. 19', correct: true},
          {text:'D. 49', correct: false},
          {text:'E. 99', correct: false},
        ],
        richtig: ["C"]
      },
      {
        fid:36,
        ftyp:"multi",
        frage:['What is true regarding the configuration of yum? \n(Choose two.)'],
        antworten:
        [
          {text:'A. find /tmp -user root -print',correct: true},
          {text:'B. find /tmp -user root -print',correct: false},
          {text:'C. find /tmp -uid root -print',correct: false},
          {text:'D. find /tmp -user root',correct: true},
          {text:'E. find /tmp -user root',correct: false},
        ],
        richtig: ["A","D"]
      },
      {
        fid:37,
        ftyp:"multi",
        frage:['Which of the following are valid stream redirection operators within Bash?\n (Choose two.)'],
        antworten:
        [
          {text:'A. <',correct: true},
          {text:'B. #>',correct: false},
          {text:'C. %>',correct: false},
          {text:'D. >>>',correct: false},
          {text:'E. 2>&1',correct: true},
        ],
        richtig: ["A","E"]
      },
      {
        fid:38,
        ftyp:"single",
        frage:['Which of the following vi commands deletes two lines, the current and the following line?'],
        antworten:[
          {text:'A. d2', correct: false},
          {text:'B. 2d', correct: false},
          {text:'C. 2dd', correct: true},
          {text:'D. dd2', correct: false},
          {text:'E. de12', correct: false},
        ],
        richtig: ["C"]
      },
      {
        fid:39,
        ftyp:"single",
        frage:['The command dbmaint & was used to run dbmaint in the background.\n However, dbmaint is terminated after logging out of the system.\n Which alternative dbmaint invocation lets dbmaint continue to run, even when the user, running the program, logs out?'],
        antworten:[
          {text:'A. job -b dmaint', correct: false},
          {text:'B. dbmaint &>/dev/pts/null', correct: false},
          {text:'C. nohup dbmaint &', correct: true},
          {text:'D. bg dbmaint', correct: false},
          {text:'E. wait dbmaint', correct: false},
        ],
        richtig: ["C"]
      },
      {
        fid:40,
        ftyp:"multi",
        frage:['From a Bash shell, which of the following commands directly execute the instructions from the file\n /usr/local/bin/runme.sh without starting a subshell?\n (Choose two.)'],
        antworten:
        [
          {text:'A. source /usr/local/bin/runme.sh',correct: true},
          {text:'B. /usr/local/bin/runme.sh',correct: false},
          {text:'C. /bin/bash /usr/local/bin/runme.sh',correct: false},
          {text:'D. .  /usr/local/bin/runme.sh',correct: true},
          {text:'E. run /usr/local/bin/runme.sh',correct: false},
        ],
        richtig: ["A","D"]
      },
      {
        fid:41,
        ftyp:"fillin",
        frage:['Which program runs a command in specific intervals and refreshes the display of the program’s output?\n (Specify ONLY the command without any path or parameters.)'],
        antworten:[
          {text:'watch', correct: true},
        ],
        richtig: ['watch']
      },
      {
        fid:42,
        ftyp:"single",
        frage:['Immediately after deleting 3 lines of text in vi and moving the cursor to a different line, which single character command will insert the deleted content below the current line?'],
        antworten:[
          {text:'A. i (lowercase)', correct: false},
          {text:'B. p (lowercase)', correct: true},
          {text:'C. P (uppercase)', correct: false},
          {text:'D. U (uppercase)', correct: false},
          {text:'E. u (lowercase)', correct: false},
        ],
        richtig: ["B"]
      },
      {
        fid:43,
        ftyp:"single",
        frage:['Which of the following commands changes all CR-LF line breaks in the text file userlist.txt to Linux standard LF line breaks and stores the result in newlist.txt?'],
        antworten:[
          {text:`A. tr -d '\\r' < userlist.txt > newlist.txt`, correct: true},
          {text:`B. tr -c '\\n\\r' '' <newlist.txt> userlist.txt`, correct: false},
          {text:`C. tr '\\r\\n' '' <userlist.txt> newlist.txt`, correct: false},
          {text:`D. tr '\\r' '\\n' userlist.txt newlist.txt`, correct: false},
          {text:`E. tr -s '/^M/^J/' userlist.txt newlist.txt`, correct: false},
        ],
        richtig: ["A"]
      },
      {
        fid:44,
        ftyp:"single",
        frage:['Given the following input stream:',
        'txt1.txt',
        'atxt.txt',
        'txtB.txt',
       'Which of the following regular expressions turns this input stream into the following output stream?',
        'txt1.bak.txt',
        'atxt.bak.txt',
        'txtB.bak.txt'],
        antworten:[
          {text:'A. s/^.txt/.bak/', correct: false},
          {text:'B. s/txt/bak.txt/', correct: false},
          {text:'C. s/txt$/bak.txt/', correct: true},
          {text:'D. s/^txt$/.bak^/', correct: false},
          {text:'E. s/[.txt]/.bak$1/', correct: false},
        ],
        richtig: ["C"]
      },
      {
        fid:45,
        ftyp:"single",
        frage:['Which command must be entered before exiting vi to save the current file as filea.txt?'],
        antworten:[
          {text:'A. %s filea.txt', correct: false},
          {text:'B. %w filea.txt', correct: false},
          {text:'C. :save filea.txt', correct: false},
          {text:'D. :w filea.txt', correct: true},
          {text:'E. :s filea.txt', correct: false},
        ],
        richtig: ["D"]
      },
      {
        fid:46,
        ftyp:"single",
        frage:['Which of the following signals is sent to a process when the key combination Ctrl+C is pressed on the keyboard?'],
        antworten:[
          {text:'A. SIGTERM', correct: false},
          {text:'B. SIGCONT', correct: false},
          {text:'C. SIGSTOP', correct: false},
          {text:'D. SIGKILL', correct: false},
          {text:'E. SIGINT', correct: true},
        ],
        richtig: ["E"]
      },
      {
        fid:47,
        ftyp:"single",
        frage:['Which of the following commands displays the output of the foo command on the screen and also writes it to a file called /tmp/foodata?'],
        antworten:[
          {text:'A. foo | less /tmp/foodata', correct: false},
          {text:'B. foo | cp /tmp/foodata', correct: false},
          {text:'C. foo > /tmp/foodata', correct: false},
          {text:'D. foo | tee /tmp/foodata', correct: true},
          {text:'E. foo > stdout >> /tmp/foodata', correct: false},
        ],
        richtig: ["D"]
      },
      {
        fid:48,
        ftyp:"single",
        frage:[`What output will be displayed when the user fred executes the following command?\n\n echo 'fred $USER'`],
        antworten:[
          {text:`A. fred fred`, correct: false},
          {text:`B. fred /home/fred/`, correct: false},
          {text:`C. 'fred $USER'`, correct: false},
          {text:`D. fred $USER`, correct: true},
          {text:`E. 'fred fred'`, correct: false},
        ],
        richtig: ["D"]
      },
      {
        fid:49,
        ftyp:"single",
        frage:['Which of the following commands displays the path to the executable file that would be executed when the command foo is invoked?'],
        antworten:[
          {text:'A. lsattr foo', correct: false},
          {text:'B. apropos foo', correct: false},
          {text:'C. locate foo', correct: false},
          {text:'D. whatis foo', correct: false},
          {text:'E. which foo', correct: true},
        ],
        richtig: ["E"]
      },
      {
        fid:50,
        ftyp:"single",
        frage:['When redirecting the output of find to the xargs command, what option to find is useful if the filenames contain spaces?'],
        antworten:[
          {text:'A. -rep-space', correct: false},
          {text:'B. -printnul', correct: false},
          {text:'C. -nospace', correct: false},
          {text:'D. -ignore-space', correct: false},
          {text:'E. -print0', correct: true},
        ],
        richtig: ["E"]
      },
      {
        fid:51,
        ftyp:"multi",
        frage:['Which of the following commands can be used to determine how long the system has been running? ',
        '(Choose two.)'],
        antworten:
        [
          {text:'A. uptime',correct: true},
          {text:'B. up',correct: false},
          {text:'C. time --up',correct: false},
          {text:'D. uname -u',correct: false},
          {text:'E. top',correct: true},
        ],
        richtig: ["A","E"]
      },
      {
        fid:52,
        ftyp:"single",
        frage:['What is true regarding the command\n ls > files\n if files does not exist?'],
        antworten:[
          {text:'A. The output of ls is printed to the terminal', correct: false},
          {text:'B. files is created and contains the output of ls', correct: true},
          {text:'C. An error message is shown and ls is not executed', correct: false},
          {text:'D. The command files is executed and receives the output of ls', correct: false},
          {text:'E. Any output of ls is discarded', correct: false},
        ],
        richtig: ["B"]
      },
      {
        fid:53,
        ftyp:"single",
        frage:['Which of the following files, located in a user’s home directory, contains the Bash history?'],
        antworten:[
          {text:'A. .bashrc_history', correct: false},
          {text:'B. .bash_histfile', correct: false},
          {text:'C. .history', correct: false},
          {text:'D. .bash_history', correct: true},
          {text:'E. .history_bash', correct: false},
        ],
        richtig: ["D"]
      },
      {
        fid:54,
        ftyp:"multi",
        frage:['Which wildcards will match the following filenames?\n (Choose two.)','ttyS0', 'ttyS1', 'ttyS2',
      ],
        antworten:
        [
          {text:'A. ttyS[1-5]', correct: false},
          {text:'B. tty?[0-5]', correct: true},
          {text:'C. tty*2', correct: false},
          {text:'D. tty[A-Z][012]', correct: true},
          {text:'E. tty[Ss][02]', correct: false},
        ],
        richtig: ["B","D"]
      },
      {
        fid:55,
        ftyp:"single",
        frage:['Which of the following commands redirects the output of ls to standard error?'],
        antworten:[
          {text:'A. ls >-1', correct: false},
          {text:'B. ls <<ERR', correct: false},
          {text:'C. ls >&2', correct: true},
          {text:'D. ls >>2', correct: false},
          {text:'E. ls |error', correct: false},
        ],
        richtig: ["C"]
      }, {
        fid:56,
        ftyp:"single",
        frage:['Which of the following commands displays the contents of a gzip compressed tar archive?'],
        antworten:[
          {text:'A. gzip archive.tgz | tar xvf', correct: false},
          {text:'B. tar -fzt archive.tgz', correct: false},
          {text:'C. gzip -d archive.tgz | tar tvf', correct: false},
          {text:'D. tar cf archive.tgz', correct: false},
          {text:'E. tar ztf archive.tgz', correct: true},
        ],
        richtig: ["E"]
      },
      {
        fid:57,
        ftyp:"single",
        frage:['Which of the following commands prints a list of usernames (first column) and their primary group',
        '(fourth column) from the /etc/passwd file?'],
        antworten:[
          {text:'A. fmt -f 1,4 /etc/passwd', correct: false},
          {text:'B. cut -d : -f 1,4 /etc/passwd', correct: true},
          {text:'C. sort -t : -k 1,4 /etc/passwd', correct: false},
          {text:'D. paste -f 1,4 /etc/passwd', correct: false},
          {text:'E. split -c 1,4 /etc/passwd', correct: false},
        ],
        richtig: ["B"]
      },
      {
        fid:58,
        ftyp:"single",
        frage:['Which of the following regular expressions represents a single upper-case letter?'],
        antworten:[
          {text:'A. :UPPER:', correct: false},
          {text:'B. [A-Z]', correct: true},
          {text:'C. !a-z', correct: false},
          {text:'D. %C', correct: false},
          {text:'E. {AZ}', correct: false},
        ],
        richtig: ['B']
      },
      {
        fid:59,
        ftyp:"fillin",
        frage:['Which command is used to start another command with a given nice level? (Specify ONLY the command',
        'without any path or parameters.)'],
        antworten:[
          {text:'nice', correct: true},
        ],
        richtig: ['nice']
      },
      {
        fid:60,
        ftyp:"single",
        frage:['Given a log file loga.log with timestamps of the format DD/MM/YYYY:hh:mm:ss, which command filters out all log entries in the time period between 8:00 am and 8:59 am?'],
        antworten:[
          {text:'A. :UPPER:', correct: false},
          {text:'B. [A-Z]', correct: true},
          {text:'C. !a-z', correct: false},
          {text:'D. %C', correct: false},
          {text:'E. {AZ}', correct: true},
        ],
        richtig: ['E']
      },
      {
        fid:61,
        ftyp:"multi",
        frage:['Instead of supplying an explicit device in /etc/fstab for mounting, what other options may be used to identify the intended partition?',
        '(Choose two.)'],
        antworten:[
          {text:'A. LABEL', correct: true},
          {text:'B. ID', correct: false},
          {text:'C. FIND', correct: false},
          {text:'D. NAME', correct: false},
          {text:'E. UUID', correct: true},
        ],
        richtig: ["A","E"]
      },
      {
        fid:62,
        ftyp:"single",
        frage:['A yum repository can declare sets of related packages.',
        'Which yum command installs all packages belonging to the group admintools?'],
        antworten:[
          {text:'A. yum pkgsel --install admintools', correct: false},
          {text:'B. yum install admintools/*', correct: false},
          {text:'C. yum groupinstall admintools', correct: true},
          {text:'D. yum taskinstall admintools', correct: false},
          {text:'E. yum collection install admintools', correct: false},
        ],
        richtig: ['C']
      },
      {
        fid:63,
        ftyp:"fillin",
        frage:['What directory contains configuration files for additional yum repositories? (Specify the full path to the directory.)'],
        antworten:[
          {text:'/etc/yum.repos.d', correct: true},
        ],
        richtig: ['/etc/yum.repos.d']
      },
      {
        fid:64,
        ftyp:"single",
        frage:['Which of the following commands installs the GRUB boot files into the currently active file systems and the boot loader into the first partition of the first disk?'],
        antworten:[
          {text:'A. grub-install /dev/sda', correct: false},
          {text:'B. grub-install /dev/sda1', correct: true},
          {text:'C. grub-install current /dev/sda0', correct: false},
          {text:'D. grub-install /dev/sda0', correct: false},
          {text:'E. grub-install current /dev/sda1', correct: false},
        ],
        richtig: ['B']
      },
      {
        fid:65,
        ftyp:"multi",
        frage:['Which of the following files are found in the /boot/ filesystem?',
        '(Choose two.)'],
        antworten:[
          {text:'A. Linux kernel images', correct: true},
          {text:'B. Bash shell binaries', correct: false},
          {text:'C. systemd target and service units', correct: false},
          {text:'D. Initial ramdisk images', correct: true},
          {text:'E. fsck binaries', correct: false},
        ],
        richtig: ["A","D"]
      },
      {
        fid:66,
        ftyp:"single",
        frage:['Which file defines the network locations from where the Debian package manager downloads software packages?'],
        antworten:[
          {text:'A. /etc/dpkg/dpkg.cfg', correct: false},
          {text:'B. /etc/apt/apt.conf.d', correct: false},
          {text:'C. /etc/apt/apt.conf', correct: false},
          {text:'D. /etc/dpkg/dselect.cfg', correct: false},
          {text:'E. /etc/apt/sources.list', correct: true},
        ],
        richtig: ['E']
      },
      {
        fid:67,
        ftyp:"single",
        frage:['When removing a package on a system using dpkg package management, which dpkg option ensures configuration files are removed as well?'],
        antworten:[
          {text:'A. --clean', correct: false},
          {text:'B. --purge', correct: true},
          {text:'C. --vacuum', correct: false},
          {text:'D. --remove', correct: false},
          {text:'E. --declare', correct: false},
        ],
        richtig: ['B']
      },
      {
        fid:68,
        ftyp:"multi",
        frage:['Which of the following statements are correct when comparing Linux containers with traditional virtual machines (e.g. LXC vs. KVM)? ',
        '(Choose three.)'],
        antworten:[
          {text:'A. Containers are a lightweight virtualization method where the kernel controls process isolation and resource management.', correct: true},
          {text:'B. Fully virtualized machines can run any operating system for a specific hardware architecture within the virtual machine.', correct: true},
          {text:'C. Containers are completely decoupled from the host system’s physical hardware and can only use emulated virtual hardware devices.', correct: false},
          {text:'D. The guest environment for fully virtualized machines is created by a hypervisor which provides virtual and emulated hardware devices.', correct: true},
          {text:'E. Containers on the same host can use different operating systems, as the container hypervisor creates separate kernel execution.', correct: false},
        ],
        richtig: ["A","B","D"]
      },
      {
        fid:69,
        ftyp:"single",
        frage:['The installation of a local Debian package failed due to unsatisfied dependencies.Which of the following commands installs missing dependencies and completes the interrupted package installation?'],
        antworten:[
          {text:'A. dpkg --fix --all', correct: false},
          {text:'B. apt-get autoinstall', correct: false},
          {text:'C. dpkg-reconfigure --all', correct: false},
          {text:'D. apt-get all', correct: false},
          {text:'E. apt-get install -f', correct: true},
        ],
        richtig: ['E']
      },
      {
        fid:70,
        ftyp:"single",
        frage:['Which of the following commands lists all currently installed packages when using RPM package management?'],
        antworten:[
          {text:'A. yum --query --all', correct: false},
          {text:'B. yum --list --installed', correct: false},
          {text:'C. rpm --query --list', correct: false},
          {text:'D. rpm --list --installed', correct: false},
          {text:'E. rpm --query --all', correct: true},
        ],
        richtig: ['E']
      },
      {
        fid:71,
        ftyp:"multi",
        frage:['Which of the following commands are valid in the GRUB 2 configuration file? ',
        '(Choose two.)'],
        antworten:[
          {text:'A. menuentry', correct: true},
          {text:'B. uefi', correct: false},
          {text:'C. pxe-ifconfig', correct: false},
          {text:'D. insmod', correct: true},
          {text:'E. kpartx', correct: false},
        ],
        richtig: ["A","D"]
      },
      {
        fid:72,
        ftyp:"single",
        frage:['What is the purpose of the ldd command?'],
        antworten:[
          {text:'A. It lists which shared libraries a binary needs to run.', correct: true},
          {text:'B. It installs and updates installed shared libraries.', correct: false},
          {text:'C. It turns a dynamically linked binary into a static binary.', correct: false},
          {text:'D. It defines which version of a library should be used by default.', correct: false},
          {text:'E. It runs a binary with an alternate library search path.', correct: false},
        ],
        richtig: ['A']
      },
      {
        fid:73,
        ftyp:"multi",
        frage:['What can the Logical Volume Manager (LVM) be used for?  ',
        '(Choose three.)'],
        antworten:[
          {text:'A. To create snapshots.', correct: true},
          {text:'B. To dynamically change the size of logical volumes.', correct: true},
          {text:'C. To dynamically create or delete logical volumes.', correct: true},
          {text:'D. To create RAID 9 arrays.', correct: false},
          {text:'E. To encrypt logical volumes.', correct: false},
        ],
        richtig: ["A","B","C"]
      },
      {
        fid:74,
        ftyp:"multi",
        frage:['What are the main differences between GPT and MBR partition tables regarding maximum number and size of partitions?',
        '(Choose two.)'],
        antworten:[
          {text:'A. MBR can handle partition sizes up to 4 TB, whereas GPT supports partition sizes up to 128 ZB.', correct: false},
          {text:'B. By default, GPT can manage up to 128 partitions while MBR only supports four primary partitions.', correct: true},
          {text:'C. By default, GPT can manage up to 64 partitions while MBR only supports 16 primary partitions.', correct: false},
          {text:'D. MBR can handle partition sizes up to 2.2 TB, whereas GPT supports sizes up to 9.4 ZB.', correct: true},
          {text:'E. Both GPT and MBR support up to four primary partitions, each with up to 4096 TB.', correct: false},
        ],
        richtig: ["B","D"]
      },
      {
        fid:75,
        ftyp:"multi",
        frage:['A backup software heavily uses hard links between files which have not been changed in between two backup runs.',
        'Which benefits are realized due to these hard links? (Choose two.)'],
        antworten:[
          {text:'A. The old backups can be moved to slow backup media, such as tapes, while still serving as hard link target in new backups.', correct: false},
          {text:'B. The backup runs faster because hard links are asynchronous operations, postponing the copy operation to a later point in time.', correct: false},
          {text:'C. The backup is guaranteed to be uncharged because a hard linked file cannot be modified after its creation.', correct: false},
          {text:'D. The backup consumes less space because the hard links point to the same data on disk instead of storing redundant copies.', correct: true},
          {text:'E. The backup runs faster because, instead of copying the data of each file, hard links only change file system meta data.', correct: true},
        ],
        richtig: ["D","E"]
      },
      {
        fid:76,
        ftyp:"fillin",
        frage:['Which file from the /proc/ filesystem contains a list of all currently mounted devices? (Specify the full name of the file, including path.)'],
        antworten:[
          {text:'/proc/mounts', correct: true},
        ],
        richtig: ['/proc/mounts']
      },
      {
        fid:77,
        ftyp:"single",
        frage:['How many fields are in a syntactically correct line of /etc/fstab?'],
        antworten:[
          {text:'A. 3', correct: false},
          {text:'B. 4', correct: false},
          {text:'C. 5', correct: false},
          {text:'D. 6', correct: true},
          {text:'E. 7', correct: false},
        ],
        richtig: ['D']
      },
      {
        fid:78,
        ftyp:"multi",
        frage:['Running chmod 640 filea.txt as a regular user doesn’t update filea.txt’s permission.',
        'What might be a reason why chmod cannot modify the permissions? (Choose two.)'],
        antworten:[
          {text:'A. filea.txt is owned by another user and a regular user cannot change the permissions of another user’s file.', correct: true},
          {text:'B. filea.txt is a symbolic link whose permissions are a fixed value which cannot be changed.', correct: true},
          {text:'C. filea.txt has the sticky bit set and a regular user cannot remove this permission.', correct: false},
          {text:'D. filea.txt is a hard link whose permissions are inherited from the target and cannot be set directly.', correct: false},
          {text:'E. filea.txt has the SetUID bit set which imposes the restriction that only the root user can make changes to the file.', correct: false},
        ],
        richtig: ["A","B"]
      },
      {
        fid:79,
        ftyp:"multi",
        frage:['Which of the following Linux filesystems preallocate a fixed number of inodes when creating a new filesystem instead of generating them as needed? (Choose two.)'],
        antworten:[
          {text:'A. JFS', correct: false},
          {text:'B. ext3', correct: true},
          {text:'C. XFS', correct: false},
          {text:'D. ext2', correct: true},
          {text:'E. procfs', correct: false},
        ],
        richtig: ["B","D"]
      },
      {
        fid:80,
        ftyp:"single",
        frage:['Which of the following commands sets the SetUID permission on the executable /bin/foo?'],
        antworten:[
          {text:'A. chmod 4755 /bin/foo', correct: true},
          {text:'B. chmod 1755 /bin/foo', correct: false},
          {text:'C. chmod u-s /bin/foo', correct: false},
          {text:'D. chmod 755+s /bin/foo', correct: false},
          {text:'E. chmod 2755 /bin/foo', correct: false},
        ],
        richtig: ['A']
      },
      {
        fid:81,
        ftyp:"multi",
        frage:['Which of the following commands can be used to display the inode number of a given file? (Choose two.)'],
        antworten:[
          {text:'A. inode', correct: false},
          {text:'B. ln', correct: false},
          {text:'C. ls', correct: true},
          {text:'D. cp', correct: false},
          {text:'E. stat', correct: true},
        ],
        richtig: ["C","E"]
      },
      {
        fid:82,
        ftyp:"single",
        frage:['Which of the following settings for umask ensures that new files have the default permissions -rw-r-----?'],
        antworten:[
          {text:'A. 0017', correct: false},
          {text:'B. 0640', correct: false},
          {text:'C. 0038', correct: false},
          {text:'D. 0227', correct: false},
          {text:'E. 0027', correct: true},
        ],
        richtig: ['E']
      }, {
        fid:83,
        ftyp:"single",
        frage:['After a power outage, the XFS file system of /dev/sda3 is inconsistent.',
        'How can the existing file system errors be fixed?'],
        antworten:[
          {text:'A. By using mount -f to force a mount of the file system', correct: false},
          {text:'B. By running xfsck on the file system', correct: false},
          {text:'C. By mounting the file system with the option xfs_repair', correct: false},
          {text:'D. By running xfsadmin repairon the file system', correct: false},
          {text:'E. By running xfs_repair on the file system', correct: true},
        ],
        richtig: ['E']
      },
      {
        fid:84,
        ftyp:"single",
        frage:['Which of the following properties of an existing file changes when a hard link pointing to that file is created?'],
        antworten:[
          {text:'A. File size', correct: false},
          {text:'B. Link count', correct: true},
          {text:'C. Modify timestamp', correct: false},
          {text:'D. Inode number', correct: false},
          {text:'E. Permissions', correct: false},
        ],
        richtig: ['B']
      },
      {
        fid:85,
        ftyp:"fillin",
        frage:['Following the Filesystem Hierarchy Standard (FHS), where should binaries that have been compiled by',
        'the system administrator be placed in order to be made available to all users on the system? (Specify the full path to the directory.)'],
        antworten:[
          {text:'/usr/local/bin', correct: true},
        ],
        richtig: ['/usr/local/bin']
      },
      {
        fid:86,
        ftyp:"single",
        frage:['Which of the following commands show how the shell handles a specific command?'],
        antworten:[
          {text:'A. where', correct: false},
          {text:'B. type', correct: true},
          {text:'C. stat', correct: false},
          {text:'D. case', correct: false},
          {text:'E. fileinfo', correct: false},
        ],
        richtig: ['B']
      }, {
        fid:87,
        ftyp:"single",
        frage:['When in Normal mode in vi, which character can be used to begin a reverse search of the text?'],
        antworten:[
          {text:'A. r', correct: false},
          {text:'B. /', correct: false},
          {text:'C. F', correct: false},
          {text:'D. ?', correct: true},
          {text:'E. s', correct: false},
        ],
        richtig: ['D']
      },
      {
        fid:88,
        ftyp:"single",
        frage:['Which of the following commands displays the manual page command from section 1?'],
        antworten:[
          {text:'A. man command(1)', correct: false},
          {text:'B. man command@1', correct: false},
          {text:'C. man 1 command', correct: true},
          {text:'D. man 1.command', correct: false},
          {text:'E. man -s 1 command', correct: false},
        ],
        richtig: ['C']
      },
      {
        fid:89,
        ftyp:"single",
        frage:['Which of the following commands creates or, in case it already exists, overwrites a file called data with the output of ls?'],
        antworten:[
          {text:'A. ls 3> data', correct: false},
          {text:'B. ls >& data', correct: false},
          {text:'C. ls > data', correct: true},
          {text:'D. ls >> data', correct: false},
          {text:'E. ls >>> data', correct: false},
        ],
        richtig: ['C']
      },
      {
        fid:90,
        ftyp:"single",
        frage:['Which of the following commands is used to change options and positional parameters within a running Bash shell?'],
        antworten:[
          {text:'A. history', correct: false},
          {text:'B. setsh', correct: false},
          {text:'C. bashconf', correct: false},
          {text:'D. set', correct: true},
          {text:'E. envsetup', correct: false},
        ],
        richtig: ['D']
      },
      {
        fid:91,
        ftyp:"multi",
        frage:['Which of the following commands display the IDs of all processes owned by root? (Choose two.)'],
        antworten:[
          {text:'A. pgrep -c root', correct: false},
          {text:'B. pgrep -u root', correct: true},
          {text:'C. pgrep -f root', correct: false},
          {text:'D. pgrep -U 0', correct: true},
          {text:'E. pgrep -c 0', correct: false},
        ],
        richtig: ["B","D"]
      },
      {
        fid:92,
        ftyp:"multi",
        frage:['Which of the following sequences in the vi editor saves the opened document and exits the editor?',
        '(Choose two.)'],
        antworten:[
          {text:'A. Ctrl XX', correct: false},
          {text:'B. Ctrl :W', correct: false},
          {text:'C. Esc zz', correct: false},
          {text:'D. Esc :wq', correct: true},
          {text:'E. Esc ZZ', correct: true},
        ],
        richtig: ["D","E"]
      },
      {
        fid:93,
        ftyp:"single",
        frage:['What is the effect of the -v option for the grep command?'],
        antworten:[
          {text:'A. It enables color to highlight matching parts.', correct: false},
          {text:'B. It shows the command’s version information.', correct: false},
          {text:'C. It only outputs non-matching lines.', correct: true},
          {text:'D. It changes the output order showing the last matching line first.', correct: false},
          {text:'E. It outputs all lines and prefixes matching lines with a+.', correct: false},
        ],
        richtig: ['C']
      },
      {
        fid:94,
        ftyp:"multi",
        frage:['Which of the following tools can show the complete path of an executable file that the current shell would execute when starting a command without specifying its complete path? (Choose two.)'],
        antworten:[
          {text:'A. find', correct: false},
          {text:'B. pwd', correct: false},
          {text:'C. which', correct: true},
          {text:'D. locate', correct: false},
          {text:'E. type', correct: true},
        ],
        richtig: ["C","E"]
      },
      {
        fid:95,
        ftyp:"single",
        frage:['Which of the following signals is sent to a process when the key combination Ctrl+Z is pressed on the keyboard?'],
        antworten:[
          {text:'A. SIGTERM', correct: false},
          {text:'B. SIGCONT', correct: false},
          {text:'C. SIGSTOP', correct: true},
          {text:'D. SIGKILL', correct: false},
          {text:'E. SIGINT', correct: false},
        ],
        richtig: ['C']
      },
      {
        fid:96,
        ftyp:"single",
        frage:['What is the output when the regular expression \'s/[ABC][abc]/xx/','is applied to the', 'following string?',
        'ABCabc'],
        antworten:[
          {text:'A. ABxxbc', correct: true},
          {text:'B. xxCxxc', correct: false},
          {text:'C. xxxxxx', correct: false},
          {text:'D. ABCabc', correct: false},
          {text:'E. Axxaxx', correct: false},
        ],
        richtig: ['A']
      },
      {
        fid:97,
        ftyp:"multi",
        frage:['Which of the following commands print the current working directory when using a Bash shell?',
        '(Choose two.)'],
        antworten:[
          {text:'A. echo "${PWD}"', correct: true},
          {text:'B. echo "${WD}"', correct: false},
          {text:'C. printwd', correct: false},
          {text:'D. pwd', correct: true},
          {text:'E. echo "${pwd}"', correct: false},
        ],
        richtig: ["A","D"]
      },
      {
        fid:98,
        ftyp:"single",
        frage:['Which of the following commands outputs test to the shell?'],
        antworten:[
          {text:`A.  cat <!EOT
                  test
                  EOT`, correct: false},
          {text:'B.  cat <|EOT ', correct: false},
          {text:'C.  cat !<EOT', correct: false},
          {text:'D.  cat &<EOT', correct: false},
          {text:'E.  cat <<EOT', correct: true},
        ],
        richtig: ['E']
      },
      {
        fid:99,
        ftyp:"single",
        frage:['What is the default nice level when a process is started using the nice command?'],
        antworten:[
          {text:'A. -10', correct: false},
          {text:'B. 0', correct: false},
          {text:'C. 10', correct: true},
          {text:'D. 15', correct: false},
          {text:'E. 20', correct: false},
        ],
        richtig: ['C']
      },
      {
        fid:100,
        ftyp:"single",
        frage:['A user accidentally created the subdirectory \dir in his home directory.',
        'Which of the following commands will remove that directory?'],
        antworten:[
          {text:'A. rmdir ~/\\dir', correct: true},
          {text:'B. rmdir "~/\dir"', correct: false},
          {text:'C. rmdir ~/’dir’', correct: false},
          {text:'D. rmdir ~/\dir', correct: false},
          {text:'E. rmdir \'~/\dir’', correct: false},
        ],
        richtig: ['A']
      },
      {
        fid:101,
        ftyp:"single",
        frage:['Which of the following commands can perform searches on file contents using regular expressions?'],
        antworten:[
          {text:'A. find', correct: false},
          {text:'B. locate', correct: false},
          {text:'C. grep', correct: true},
          {text:'D. reggrep', correct: false},
          {text:'E. pgrep', correct: false},
        ],
        richtig: ['C']
      },
      {
        fid:102,
        ftyp:"single",
        frage:['In a nested directory structure, which find command line option would be used to restrict the command to searching down a particular number of subdirectories?'],
        antworten:[
          {text:'A. -maxdepth', correct: true},
          {text:'B. -dirmax', correct: false},
          {text:'C. -maxlevels', correct: false},
          {text:'D. -s', correct: false},
          {text:'E. -n', correct: false},
        ],
        richtig: ['A']
      },
      {
        fid:103,
        ftyp:"single",
        frage:['Which of the following commands determines a file’s format by using a definition database file which',
        'contains information about all common file types?'],
        antworten:[
          {text:'A. type', correct: false},
          {text:'B. file', correct: true},
          {text:'C. magic', correct: false},
          {text:'D. pmagic', correct: false},
          {text:'E. hash', correct: false},
        ],
        richtig: ['B']
      },
      {
        fid:104,
        ftyp:"single",
        frage:['Which of the following commands generates a list of user names from /etc/passwd along with their login shell?'],
        antworten:[
          {text:'A. column -s : 1,7 /etc/passwd', correct: false},
          {text:'B. chop -c 1,7 /etc/passwd', correct: false},
          {text:'C. colrm 1,7 /etc/passwd', correct: false},
          {text:'D. sort -t: -k1,7 /etc/passwd', correct: false},
          {text:'E. cut -d: -f1,7 /etc/passwd', correct: true},
        ],
        richtig: ['E']
      },
      {
        fid:105,
        ftyp:"single",
        frage:['If the gzip compressed tar archive texts.tgz contains the files a.txt and b.txt, which files will be present',
        'in the current directory after running gunzip texts.tgz?'],
        antworten:[
          {text:'A. Only a.txt, b.txt, and texts.tgz', correct: false},
          {text:'B. Only texts.tar and texts.tgz', correct: false},
          {text:'C. Only a.txt.gz and b.txt.gz', correct: false},
          {text:'D. Only a.txt and b.txt', correct: false},
          {text:'E. Only texts.tar', correct: true},
        ],
        richtig: ['E']
      },
      {
        fid:106,
        ftyp:"single",
        frage:['In the vi editor, how can commands such as moving the cursor or copying lines into the buffer be',
        'issued multiple times or applied to multiple rows?'],
        antworten:[
          {text:'A. By using the command :repeat followed by the number and the command', correct: false},
          {text:'B. By specifying the number right in front of a command such as 4l or 2yj.', correct: true},
          {text:'C. By selecting all affected lines using the shit and cursor keys before applying the command.', correct: false},
          {text:'D. By issuing a command such as :set repetition=4 with repeats every subsequent command 4 times.', correct: false},
          {text:'E. By specifying the number after a command such as l4 or yj2 followed by escape.', correct: false},
        ],
        richtig: ['B']
      },
      {
        fid:107,
        ftyp:"single",
        frage:['Which of the following statements is correct for a command ending with an & character?'],
        antworten:[
          {text:'A. The command’s output is redirected to /dev/null.', correct: false},
          {text:'B. The command is run in background of the current shell.', correct: true},
          {text:'C. The command’s output is executed by the shell.', correct: false},
          {text:'D. The command is run as a direct child of the init process.', correct: false},
          {text:'E. The command’s input is read from /dev/null.', correct: false},
        ],
        richtig: ['B']
      },
      {
        fid:108,
        ftyp:"single",
        frage:['Which of the following commands reads a file and creates separate chunks of a given size from the file’s contents?'],
        antworten:[
          {text:'A. ar', correct: false},
          {text:'B. cat', correct: false},
          {text:'C. break', correct: false},
          {text:'D. split', correct: true},
          {text:'E. parted', correct: false},
        ],
        richtig: ['D']
      },
      {
        fid:109,
        ftyp:"single",
        frage:['What is the purpose of the xargs command?'],
        antworten:[
          {text:'A. It passes arguments to an X server.', correct: false},
          {text:'B. It repeats the execution of a command using different parameters for each invocation.', correct: false},
          {text:'C. It reads standard input and builds up commands to execute.', correct: true},
          {text:'D. It asks a question, graphically, and returns the answer to the shell.', correct: false},
          {text:'E. It allows specifying long options (like --help) for commands that normally only accept short options (like -h)', correct: false},
        ],
        richtig: ['C']
      },
      {
        fid:110,
        ftyp:"fillin",
        frage:['Which command displays a list of all background tasks running in the current shell? (Specify ONLY the',
        'command without any path or parameters.)'],
        antworten:[
          {text:'jobs', correct: true},
        ],
        richtig: ['jobs']
      },
      {
        fid:111,
        ftyp:"fillin",
        frage:['Which command is used to change the priority of an already running process? (Specify ONLY the command without any path or parameters.)'],
        antworten:[
          {text:'renice', correct: true},
        ],
        richtig: ['renice']
      },
      {
        fid:112,
        ftyp:"single",
        frage:['In Bash, inserting 1>&2 after a command redirects…'],
        antworten:[
          {text:'A. …standard error to standard input.', correct: false},
          {text:'B. …standard output to standard error.', correct: true},
          {text:'C. …standard input to standard error.', correct: false},
          {text:'D. …standard error to standard output.', correct: false},
          {text:'E. …standard output to standard input.', correct: false},
        ],
        richtig: ['B']
      },
      {
        fid:113,
        ftyp:"single",
        frage:['When booting from the hard disk, a computer successfully loads the Linux kernel and initramfs but',
        'hangs during the subsequent startup tasks. The system is booted using a Linux based rescue CD to',
        'investigate the problem.',
        'Which of the following methods helps to identify the root cause of the problem?'],
        antworten:[
          {text:'A. Using the dmesg command from the rescue CD’s shell to view the original system’s boot logs.', correct: false},
          {text:'B. Investigating the file /proc/kmsg on the computer’s hard disk for possible errors.', correct: false},
          {text:'C. Investigating the files in /var/log on the computer’s hard disk for possible errors.', correct: true},
          {text:'D. Using chroot to switch to the file system on the hard disk and use dmesg to view the logs.', correct: false},
          {text:'E. Rebooting again from the hard drive since the system successfully booted from the rescue CD.', correct: false},
        ],
        richtig: ['C']
      },
      {
        fid:114,
        ftyp:"single",
        frage:['Where is the bootloader stored on the hard disk of a UEFI system?'],
        antworten:[
          {text:'A. In the EFI Boot Record (EBR).', correct: false},
          {text:'B. In the Master Boot Record (MBR).', correct: false},
          {text:'C. On the EFI System Partition (ESP).', correct: true},
          {text:'D. On the partition labeled boot.', correct: false},
          {text:'E. On the partition number 127.', correct: false},
        ],
        richtig: ['C']
      },
      {
        fid:115,
        ftyp:"single",
        frage:['What is the correct way to set the default systemd boot target to multi-user?'],
        antworten:[
          {text:'A. systemctl isolate multi-user.target', correct: false},
          {text:'B. systemctl set-runlevel multi-user.target', correct: false},
          {text:'C. systemctl set-boot multi-user.target', correct: false},
          {text:'D. systemctl set-default multi-user.target', correct: true},
          {text:'E. systemctl boot -p multi-user.target', correct: false},
        ],
        richtig: ['D']
      },
      {
        fid:116,
        ftyp:"multi",
        frage:['Which of the following statements are correct about the initial RAM disk involved in the boot process of Linux? (Choose two.)'],
        antworten:[
          {text:'A. An initramfs is a compressed file system archive, which can be unpacked to examine its contents.', correct: true},
          {text:'B. An initramfs file contains the MBR, the bootloader and the Linux kernel.', correct: false},
          {text:'C. After a successful boot, the initramfs contents are available in /run/initramfs/.', correct: false},
          {text:'D. The kernel uses the initramfs temporarily before accessing the real root file system.', correct: true},
          {text:'E. An initramfs does not depend on a specific kernel version and is not changed after the initial installation.', correct: false},
        ],
        richtig: ["A","D"]
      },
      {
        fid:117,
        ftyp:"single",
        frage:['Which of the following commands loads a kernel module along with any required dependency',
        'modules?'],
        antworten:[
          {text:'A. depmod', correct: false},
          {text:'B. modprobe', correct: true},
          {text:'C. module_install', correct: false},
          {text:'D. insmod', correct: false},
          {text:'E. loadmod', correct: false},
        ],
        richtig: ['B']
      },
      {
        fid:118,
        ftyp:"multi",
        frage:['What information can the lspci command display about the system hardware? (Choose three.)'],
        antworten:[
          {text:'A. System battery type', correct: false},
          {text:'B. Device IRQ settings', correct: true},
          {text:'C. PCI bus speed', correct: true},
          {text:'D. Ethernet MAC address', correct: false},
          {text:'E. Device vendor identification', correct: true},
        ],
        richtig: ["B","C","E"]
      },
      {
        fid:119,
        ftyp:"fillin",
        frage:['Which System V init configuration file is commonly used to set the default run level? (Specify the full name of the file, including path.)'],
        antworten:[
          {text:'/etc/inittab', correct: true},
        ],
        richtig: ['/etc/inittab']
      },
      {
        fid:120,
        ftyp:"multi",
        frage:['Given the following two symbolic links in a System V init configuration:',
        '/etc/rc1.d/K01apache2',
        '/etc/rc2.d/S02apache2',
       'When are the scripts executed that are referenced by these links? (Choose two.)'],
        antworten:[
          {text:'A. S02apache2 is run when runlevel 2 is entered.', correct: true},
          {text:'B. S02apache2 is run when runlevel 2 is left.', correct: false},
          {text:'C. K01apache2 is never run because K indicates a deactivated service.', correct: false},
          {text:'D. Both S02apache2 and K01apache2 are run during a system shutdown.', correct: false},
          {text:'E. K01apache2 is run when runlevel 1 is entered.', correct: true},
        ],
        richtig: ["A","E"],
          // 'Explanation: correct answer: AE',
          // 'Entering a runlevel, first all Kxx... scripts will be called with first parameter "stop" to stop the service.'
          // 'Then all Sxx... script will be called with first parameter "start" to start the service',

          // 'etc/rc1.d/K01apache2',
          //   'entering runlevel 1 : will execute script with parameter "stop" to stop service ',
          // '/etc/rc2.d/S02apache2',
          //   'entering runlevel 2 : will execute script with parameter "start" to start service',
      },
    ]
  }


getAllAlleFragen(): Frage[] {
  return this.allquestions
    }
    // getAllMcFragen(): McFrage[] {
    //   return this.Mcquestions
    // }
    // getAllScFragen(): ScFrage[] {
    //   return this.Scquestions
    // }
    // getAllFiFragen(): FillinFrage[] {
    //   return this.fiquestions
    // }
}
