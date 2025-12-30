import os
import requests
from bs4 import BeautifulSoup
from urllib.parse import urljoin, urlparse
import tkinter as tk
from tkinter import messagebox

def descargar_archivo(url, carpeta):
    try:
        nombre = os.path.basename(urlparse(url).path)
        if not nombre:
            return

        ruta = os.path.join(carpeta, nombre)

        r = requests.get(url, stream=True, timeout=10)
        r.raise_for_status()

        with open(ruta, "wb") as f:
            for chunk in r.iter_content(1024):
                f.write(chunk)
    except Exception as e:
        print("Error:", e)

def descargar_imagenes():
    url = entrada_url.get().strip()
    if not url:
        messagebox.showwarning("Aviso", "Introduce una URL")
        return

    carpeta = os.path.dirname(os.path.abspath(__file__))

    try:
        response = requests.get(url)
        response.raise_for_status()
    except:
        messagebox.showerror("Error", "No se pudo acceder a la URL")
        return

    soup = BeautifulSoup(response.text, "html.parser")
    contador = 0

    # ---- IMG ----
    for img in soup.find_all("img"):
        src = img.get("src")
        if src:
            src = urljoin(url, src)
            descargar_archivo(src, carpeta)
            contador += 1

    # ---- SVG (PATH) ----
    for i, svg in enumerate(soup.find_all("svg")):
        ruta_svg = os.path.join(carpeta, f"svg_{i+1}.svg")
        with open(ruta_svg, "w", encoding="utf-8") as f:
            f.write(str(svg))
        contador += 1

    messagebox.showinfo(
        "Completado",
        f"Descargados {contador} elementos\nGuardados en la carpeta del script"
    )

# ---------- INTERFAZ ----------
ventana = tk.Tk()
ventana.title("Descargar imágenes de una web")
ventana.geometry("520x160")
ventana.resizable(False, False)

tk.Label(
    ventana,
    text="URL de la página:",
    font=("Arial", 11)
).pack(pady=10)

entrada_url = tk.Entry(ventana, width=65)
entrada_url.pack()

# URL ya escrita
entrada_url.insert(0, "http://127.0.0.1:5501/index.html")

tk.Button(
    ventana,
    text="Descargar imágenes",
    command=descargar_imagenes,
    bg="#4CAF50",
    fg="white",
    padx=10,
    pady=5
).pack(pady=15)

ventana.mainloop()
