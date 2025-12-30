# Carpeta de imágenes
$imagenesPath = ""

# Lista de archivos permitidos
$permitidas = @(
    "svg_1.png",
    "svg_2.png",
    "svg_3.png",
    "svg_4.png",
    "svg_5.png",
    "svg_6.png",
    "svg_11.png",
    "svg_16.png",
    "svg_24.png",
    "svg_25.png",
    "svg_26.png",
    "svg_27.png",
    "svg_29.png",
    "svg_30.png",
    "svg_31.png",
    "svg_32.png",
    "svg_33.png",
    "svg_34.png",
    "svg_35.png"
)

Get-ChildItem $imagenesPath -Filter "svg_*.png" | ForEach-Object {
    if ($permitidas -notcontains $_.Name) {
        Write-Host "Eliminando $($_.Name)"
        Remove-Item $_.FullName -Force
    }
}
