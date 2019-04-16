<?php

$modules = [
    [
        'id' => 1,
        'name' => '用户管理',
        'percentage' => 0
    ],
    [
        'id' => 2,
        'name' => '角色管理',
        'percentage' => 30
    ],
    [
        'id' => 3,
        'name' => '权限管理',
        'percentage' => 50
    ],
    [
        'id' => 4,
        'name' => '学校管理',
        'percentage' => 70
    ],
    [
        'id' => 5,
        'name' => '学生管理',
        'percentage' => 100
    ]
];

echo json_encode($modules);
