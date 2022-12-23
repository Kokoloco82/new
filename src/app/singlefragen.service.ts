import { Injectable } from '@angular/core';
import { ScFrage } from './sc-frage';

@Injectable({
  providedIn: 'root'
})
export class SinglefragenService {
  // Mcquestions: McFrage[] //= MultipleChoiceJson

  Scquestions: ScFrage[]
  // fiquestions: FillinFrage[]

  constructor() {

  this.Scquestions =
  [
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
      frage:['Which of the following commands changes the number of days before the ext3 filesystem on /dev/sda1',
      'has to run through a full filesystem check while booting?'],
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
      frage:['Consider the following output from the command ls -i:',
      '525385 a.txt',
      'How would a new file named c.txt be created with the same inode number as a.txt (Inode 525385)?'],
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
      fid:20,
      ftyp:"single",
      frage:['A faulty kernel module is causing issues with a network interface card.',
      'Which of the following actions ensures that this module is not loaded automatically when the system boots?'],
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
      frage:['A Debian package creates several files during its installation.',
      'Which of the following commands searches for packages owning the file /etc/debian_version?'],
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
      frage:['The command dbmaint & was used to run dbmaint in the background.',
      'However, dbmaint is terminated after logging out of the system.',
      'Which alternative dbmaint invocation lets dbmaint continue to run, even when the user, running the program, logs out?'],
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
    // {
    //   fid:43,
    //   ftyp:"single",
    //   frage:['Which of the following commands changes all CR-LF line breaks in the text file userlist.txt to Linux standard LF line breaks and stores the result in newlist.txt?'],
    //   antworten:[
    //     {text:'A. tr -d '\r' < userlist.txt > newlist.txt', correct: true},
    //     {text:'B. tr -c '\n\r' '' <newlist.txt> userlist.txt', correct: false},
    //     {text:'C. tr '\r\n' '' <userlist.txt> newlist.txt', correct: false},
    //     {text:'D. tr '\r' '\n' userlist.txt newlist.txt', correct: false},
    //     {text:'E. tr -s '/^M/^J/' userlist.txt newlist.txt', correct: false},
    //   ],
    //   richtig: ["A"]
    // },
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
    // {
    //   fid:48,
    //   ftyp:"single",
    //   frage:['What output will be displayed when the user fred executes the following command?',
    //   'echo `fred $USER`]',
    //   antworten:[
    //     {text:'A. fred fred', correct: false},
    //     {text:'B. fred /home/fred/', correct: false},
    //     {text:'C. 'fred $USER’', correct: false},
    //     {text:'D. fred $USER', correct: true},
    //     {text:'E. 'fred fred’', correct: false},
    //   ],
    //   richtig: ["D"]
    // },
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
      fid:52,
      ftyp:"single",
      frage:['What is true regarding the command',
      'ls > files',
    'if files does not exist?'],
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
    },
    {
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
    // {
    //   fid:98,
    //   ftyp:"single",
    //   frage:['Which of the following commands outputs test to the shell?'],
    //   antworten:[
    //     {text:'A.  cat <!EOT',
    //     'test',
    //     'EOT', correct: false},
    //     {text:'B.  cat <|EOT ', correct: false},
    //     {text:'C.  cat !<EOT', correct: false},
    //     {text:'D.  cat &<EOT', correct: false},
    //     {text:'E.  cat <<EOT', correct: true},
    //   ],
    //   richtig: ['E']
    // },
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
      fid:99,
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
  ]
}
// getAllMcFragen(): McFrage[] {
//   return this.Mcquestions
// }
getAllScFragen(): ScFrage[] {
  return this.Scquestions
}
// getAllFiFragen(): FillinFrage[] {
//   return this.fiquestions
// }
// getAll(): Question[] {
//   return this.questions
// }
}
