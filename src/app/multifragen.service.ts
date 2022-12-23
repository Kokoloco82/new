import { Injectable } from '@angular/core';
import { McFrage } from './mc-frage';

@Injectable({
  providedIn: 'root'
})
export class MultifragenService {
  Mcquestions: McFrage[]


  constructor() {
    this.Mcquestions = [
      {
        fid:9,
        ftyp:"multi",
        frage: ['Consider the following directory:',
        'drwxrwxr-x 2 root sales 4096 Jan 1 15:21 sales',
       'Which command ensures new files created within the directory sales are owned by the group sales?',
       '(Choose two.)'],
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
        frage: ['In order to display all currently mounted filesystems, which of the following commands could be used?',
        '(Choose two.)'],
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
        fid:18,
        ftyp:"multi",
        frage:['Which of the following statements are true about the boot sequence of a PC using a BIOS?',
        '(Choose two.)'],
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
        frage:['What is true regarding UEFI firmware? ',
        '(Choose two.)'],
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
        fid:21,
        ftyp:"multi",
        frage:['When is the content of the kernel ring buffer reset? ',
        '(Choose two.)'],
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
        fid:25,
        ftyp:"multi",
        frage:['Which of the following directories on a 64 bit Linux system typically contain shared libraries? ',
        '(Choose two.)'],
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
        frage:['Which of the following files exist in a standard GRUB 2 installation? ',
        '(Choose two.)'],
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
        fid:28,
        ftyp:"multi",
        frage:['Which of the following properties of a Linux system should be changed when a virtual machine is cloned? ',
        '(Choose two.)'],
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
        fid:31,
        ftyp:"multi",
        frage:['What is true regarding the configuration of yum?',
        '(Choose two.)'],
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
        fid:36,
        ftyp:"multi",
        frage:['What is true regarding the configuration of yum?',
        '(Choose two.)'],
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
        frage:['Which of the following are valid stream redirection operators within Bash? ',
        '(Choose two.)'],
        antworten:
        [
          {text:'A. <',correct: true},
          {text:'B. #>',correct: false},
          {text:'C. %>',correct: false},
          {text:'D. >>>',correct: true},
          {text:'E. 2>&1',correct: false},
        ],
        richtig: ["A","D"]
      },
      {
        fid:40,
        ftyp:"multi",
        frage:['From a Bash shell, which of the following commands directly execute the instructions from the file',
        '/usr/local/bin/runme.sh without starting a subshell?',
        '(Choose two.)'],
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
        fid:54,
        ftyp:"multi",
        frage:['Which wildcards will match the following filenames? ',
        '(Choose two.)','ttyS0', 'ttyS1', 'ttyS2',
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
          // 'Entering a runlevel, first all Kxx... scripts will be called with first', 'parameter "stop" to stop the service.',
          // 'Then all Sxx... script will be called with first parameter "start" to start the service',

          // 'etc/rc1.d/K01apache2',
          //   'entering runlevel 1 : will execute script with parameter "stop" to stop', 'service ',
          // '/etc/rc2.d/S02apache2',
          //   'entering runlevel 2 : will execute script with parameter "start" to start', 'service'
      }
    ]
    }

getAllMcFragen(): McFrage[] {
  return this.Mcquestions
}
}
