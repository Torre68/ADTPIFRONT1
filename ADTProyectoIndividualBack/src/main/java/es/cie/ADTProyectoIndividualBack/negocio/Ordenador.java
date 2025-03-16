package es.cie.ADTProyectoIndividualBack.negocio;

public class Ordenador {

    private int numserie;
    private String marca;
    private String modelo;
    private double precio;
    
    public Ordenador() {
    }
    public Ordenador(int numserie, String marca, String modelo, double precio) {
        this.numserie = numserie;
        this.marca = marca;
        this.modelo = modelo;
        this.precio = precio;
    }
    public Ordenador(int numserie) {
        this.numserie = numserie;
    }
    public int getNumserie() {
        return numserie;
    }
    public void setNumserie(int numserie) {
        this.numserie = numserie;
    }
    public String getMarca() {
        return marca;
    }
    public void setMarca(String marca) {
        this.marca = marca;
    }
    public String getModelo() {
        return modelo;
    }
    public void setModelo(String modelo) {
        this.modelo = modelo;
    }
    public double getPrecio() {
        return precio;
    }
    public void setPrecio(double precio) {
        this.precio = precio;
    }

    

}
