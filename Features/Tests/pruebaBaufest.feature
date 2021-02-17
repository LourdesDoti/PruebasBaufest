Feature: Prueba Baufest
 @PRUEBA
Scenario: Ejercicio 1 automatizacion web
Given Abro la pagina web 
And Registro un usuario
And Inicio sesion
When Voy a la seccion de laptops
And Agrego una laptop al carrito
Then Verifico que la laptop se agrego correctamente
