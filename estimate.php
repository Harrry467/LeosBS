<?php

header("Content-Type: application/json");

if ($_SERVER["REQUEST_METHOD"] !== "POST") {
    http_response_code(405);

    echo json_encode([
        "success" => false,
        "message" => "Only POST requests are accepted."
    ]);

    exit;
}

$amount = isset($_POST["amount"])
    ? floatval($_POST["amount"])
    : 0;

$percentage = isset($_POST["percentage"])
    ? floatval($_POST["percentage"])
    : 0;

if ($amount < 0 || $percentage < 0 || $percentage > 100) {

    http_response_code(400);

    echo json_encode([
        "success" => false,
        "message" => "Invalid amount or percentage."
    ]);

    exit;
}

$estimatedImpact = $amount * ($percentage / 100);

echo json_encode([
    "success" => true,
    "amount" => $amount,
    "percentage" => $percentage,
    "estimatedImpact" => $estimatedImpact
]);

?>
