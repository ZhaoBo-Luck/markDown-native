//页面加载事件，当页面加载的时候就会执行该方法
$(function () {
    $("#grid").datagrid({
        url: "MyUser/findUserList",
        columns: [[
            {
                field: "id",
                title: "编号",
            },
            {
                field: "username",
                title: "用户名",
            },
            {
                field: "email",
                title: "邮箱",
            },
            {
                field: "name",
                title: "姓名",
            },
            {
                field: "sex",
                title: "性别",
            },
            {
                field: "birthday",
                title: "生日",
            },
        ]]
    })
});

$(function () {
    $("#grid2").datagrid({
        url: "MyUser/findUserByName/雯",
        columns: [[
            {
                field: "id",
                title: "编号",
            },
            {
                field: "username",
                title: "用户名",
            },
            {
                field: "email",
                title: "邮箱",
            },
            {
                field: "name",
                title: "姓名",
            },
            {
                field: "sex",
                title: "性别",
            },
            {
                field: "birthday",
                title: "生日",
            },
        ]]
    })
});
/**
 * 这是三个相互独立的页面加载事件，没有存在说谁包含谁
 */

$(function () {
    $("#grid3").datagrid({
        url: "JpaUser/findUserList",
        columns: [[
            {
                field: "id",
                title: "编号",
            },
            {
                field: "username",
                title: "用户名",
            },
            {
                field: "email",
                title: "邮箱",
            },
            {
                field: "name",
                title: "姓名",
            },
            {
                field: "sex",
                title: "性别",
            },
            {
                field: "birthday",
                title: "生日",
            },
        ]]
    })
});
