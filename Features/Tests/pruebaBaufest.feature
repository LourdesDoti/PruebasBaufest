Feature: Prueba Baufest

Scenario: Ejercicio 1 automatizacion web
Given Abro la pagina web 
And Registrar usuario
When Voy a la seccion de laptops
And Agrego una laptop al carrito
Then Verifico que la laptop se agrego correctamente


Scenario: Ejercicio 2 automatizacion web service
Given Agrego una mascota
When Busco a la mascota por su id
And Modifico el nombre de la mascota agregada

@PRUEBA
Scenario: Ejercicio 3 automatizacion mobile
Given Abro la aplicacion
When registro usuario en mi app mobile
And login en mi app mobile
And Completo todos los campos de la seccion Forms
