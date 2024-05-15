## Git命令合集
> ####  退出当前用户登录
==这两个命令可以分别用于清除Git中配置的用户名和邮箱。执行以上两个命令后，Git就会提示无法找到用户配置信息，从而达到退出当前账号的目的。==
```
git config --unset-all user.name
git config --unset-all user.email
```

> ####  退出当前用户登录
==Git退出当前登录可以通过删除Git的凭证缓存来实现。Git在缓存凭证的过程中，会在用户HOME目录下的~/.git-credentials文件中保存凭证信息，我们可以通过删除这个文件来清除凭证信息。
如果Git的凭证缓存没有启用，我们可以在退出Git账号后切换到另一个账号来达到退出当前登录的目的==
```
rm ~/.git-credentials
```
> #### Git退出之前的账号
==如果我们需要退出Git之前保存的账号，可以使用以下命令清除Git中的用户名和邮箱配置信息==
```
git config --global --unset-all user.name
git config --global --unset-all user.email
```

链接地址:https://blog.csdn.net/weixin_44767973/article/details/131591333
测试git