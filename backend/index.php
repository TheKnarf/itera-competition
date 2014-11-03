<?php

header('Content-Type: application/json');

$url = "https://cfs-ws-itera.cicero.no/cfp/6/ws/rest/calculator/calculateLoan?";

$arr = array();

foreach($_GET as $key => $value)
    $arr[] = $key . "=" . $value;

$url .= implode("&", $arr);

echo file_get_contents($url);