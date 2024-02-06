+++
title = 'Syntax Higlight (Prism.js)'
+++

Syntax Higlight use [Prism.js](https://prismjs.com/)

All [availble languages](https://prismjs.com/#supported-languages) are enabled 

## Code blocks

```markdown
\```java
// Hello World in Java

class HelloWorld {
  static public void main( String args[] ) {
    System.out.println( "Hello World!" );
  }
}
\```
```

```java
// Hello World in Java

class HelloWorld {
  static public void main( String args[] ) {
    System.out.println( "Hello World!" );
  }
}
```

## Command-line

command-line plugin is available for **bash** and **powershell**

You can find more info on the [Command line plugin documenation](https://prismjs.com/plugins/command-line/)

### Non-Root User With Output
```markdown
\```bash { cli=true user=chris host=remotehost output="2, 4-8" }
```

```bash { cli=true user=chris host=remotehost output="2, 4-8" }
pwd
/usr/home/chris/bin
ls -la
total 2
drwxr-xr-x   2 chris  chris     11 Jan 10 16:48 .
drwxr--r-x  45 chris  chris     92 Feb 14 11:10 ..
-rwxr-xr-x   1 chris  chris    444 Aug 25  2013 backup
-rwxr-xr-x   1 chris  chris    642 Jan 17 14:42 deploy
```

### Windows PowerShell With Output

```markdown
\```powershell { cli=true prompt="PS C:\Users\Chris>" output="2-19" }
```

```powershell { cli=true prompt="PS C:\Users\Chris>" output="2-19" }
dir


    Directory: C:\Users\Chris


Mode                LastWriteTime     Length Name
----                -------------     ------ ----
d-r--        10/14/2015   5:06 PM            Contacts
d-r--        12/12/2015   1:47 PM            Desktop
d-r--         11/4/2015   7:59 PM            Documents
d-r--        10/14/2015   5:06 PM            Downloads
d-r--        10/14/2015   5:06 PM            Favorites
d-r--        10/14/2015   5:06 PM            Links
d-r--        10/14/2015   5:06 PM            Music
d-r--        10/14/2015   5:06 PM            Pictures
d-r--        10/14/2015   5:06 PM            Saved Games
d-r--        10/14/2015   5:06 PM            Searches
d-r--        10/14/2015   5:06 PM            Videos
```