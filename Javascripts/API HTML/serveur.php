<?php
header('Content-Type: text/event-stream');
header('Cache-Control: no-cache');
$time = date('r');
echo "data: Le temps actuel est {$time}\n\n";
flush();
?>
