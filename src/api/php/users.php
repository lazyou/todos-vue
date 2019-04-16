<?php
header('Access-Control-Allow-Origin:*');

$users = [
    [
        'id' => 1,
        'name' => '林某某'
    ],
    [
        'id' => 2,
        'name' => '王某某'
    ],
    [
        'id' => 3,
        'name' => '陈某某'
    ]
];

echo json_encode($users);
