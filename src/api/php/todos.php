<?php
header('Access-Control-Allow-Origin:*');

$todos = [
    [
        'id' => 1,
        'name' => '某某任务1',
        'is_done' => true,
        'user_id' => 1,
        'expect_done_at' => '2019-04-12'
    ],
    [
        'id' => 2,
        'name' => '某某任务2',
        'is_done' => false,
        'user_id' => 2,
        'expect_done_at' => ''
    ],
    [
        'id' => 3,
        'name' => '某某任务3',
        'is_done' => false,
        'user_id' => null,
        'expect_done_at' => '2019-11-12'
    ]
];

echo json_encode($todos);
