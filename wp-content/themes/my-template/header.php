<!DOCTYPE html>
<html lang="es-CL">
<head>
  <meta charset="UTF-8">
  <title>Webpack Wordpress</title>
  <meta name="viewport" content="width=device-width, initial-scale=1">
  <meta name="Description" content="">

  <link rel="icon" type="image/png" href="<?php echo get_template_directory_uri() . '/assets/img/favicon.png' ?>" />

  <?php wp_head(); ?>
</head>
<body>


<?php $adminurl    = json_encode( admin_url("admin-ajax.php") ); ?>
<?php $templateuri = json_encode( get_template_directory_uri() ); ?>
<script>
var ADMINURL    = <?php echo $adminurl; ?>;
var TEMPLATEURI = <?php echo $templateuri ?>;
</script>


<header>
</header>
