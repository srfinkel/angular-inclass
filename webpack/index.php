<?php
if(session_status() !== PHP_SESSION_ACTIVE) {
	session_start();
}
?>
<!DOCTYPE html>
<html lang="en">
	<head>
		<meta charset="UTF-8" />
		<meta http-equiv="X-UA-Compatible" content="IE=edge" />
		<meta name="viewport" content="width=device-width, initial-scale=1" />
		<!-- The <base> sets the routes up for success; it makes all URLs relative to this URL. Needed for all the templates to relate to this fixed point -->
		<!-- PHP_SELF no matter what your deployment directories are, it will pull from those directories. Alt would be to static;y direct it to one dir-->
		<base href="<?php echo dirname($_SERVER["PHP_SELF"]) . "/"; ?>" />

		<title>Angular Inclass</title>
	</head>
	<body>
		<!-- This custom tag much match your Angular @Component selector name in app/app.component.ts -->
		<angular-inclass-app>Loading&hellip;</angular-inclass-app>
	</body>
</html>