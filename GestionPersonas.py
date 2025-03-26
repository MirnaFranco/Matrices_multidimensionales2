# trabajo
import sys

def mostrar_menu():
    print("\n--- Menú ---")
    print("1. Ingresar nueva persona")
    print("2. Mostrar todos los datos")
    print("3. Filtrar por DNI")
    print("4. Salir")

def ingresar_persona(matriz):
    nombre = input("Ingresa el nombre: ")
    apellido = input("Ingresa el apellido: ")
    dni = input("Ingresa el DNI: ")
    telefonos = input("Ingresa los teléfonos separados por comas: ").split(',')
    hijos = input("Ingresa los nombres de los hijos separados por comas: ").split(',')
    
    telefonos = [tel.strip() for tel in telefonos if tel.strip()]
    hijos = [hijo.strip() for hijo in hijos if hijo.strip()]
    
    matriz.append([nombre, apellido, dni, telefonos, hijos])
    print("\nPersona agregada con éxito!\n")

def mostrar_todos(matriz):
    if not matriz:
        print("\nNo hay personas registradas.\n")
        return
    
    print("\nDatos ingresados:")
    print(matriz)
    for persona in matriz:
        nombre, apellido, dni, telefonos, hijos = persona
        print(f"{nombre} {apellido}, DNI: {dni}, Teléfonos: {len(telefonos)} teléfono(s), Hijos: {len(hijos)}")

def filtrar_por_dni(matriz):
    dni_buscar = input("Ingresa el DNI para filtrar: ")
    for persona in matriz:
        if persona[2] == dni_buscar:
            nombre, apellido, dni, telefonos, hijos = persona
            print(f"\nDatos de {nombre} {apellido}:")
            print(f"DNI: {dni}, Teléfonos: {len(telefonos)} teléfono(s), Hijos: {len(hijos)}\n")
            return
    print("\nNo se encontró una persona con ese DNI.\n")

def main():
    matriz_personas = []
    while True:
        mostrar_menu()
        opcion = input("\nElige una opción: ")
        if opcion == "1":
            ingresar_persona(matriz_personas)
        elif opcion == "2":
            mostrar_todos(matriz_personas)
        elif opcion == "3":
            filtrar_por_dni(matriz_personas)
        elif opcion == "4":
            print("\nSaliendo del programa...\n")
            sys.exit()
        else:
            print("\nOpción no válida, intenta de nuevo.\n")

if __name__ == "__main__":
    main()
