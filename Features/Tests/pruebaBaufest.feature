Feature: Prueba Baufest



Scenario: Ejercicio 1 automatizacion web
Given Abro la pagina web 
And Prueba
When Voy a la seccion de laptops
And Agrego una laptop al carrito
Then Verifico que la laptop se agrego correctamente

@PRUEBA
Scenario: Ejercicio 2 automatizacion web service
Given Agrego una mascota
When Busco a la mascota por su id
And Modifico el nombre de la mascota agregada