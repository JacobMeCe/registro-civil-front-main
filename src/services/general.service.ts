import { Injectable } from "@angular/core";
import { HttpClient, HttpHeaders } from "@angular/common/http";
import { RespuestaAPI } from "src/interface/api-responses.model";
import { environment } from 'src/environments/environment';
import { Observable, Subject } from "rxjs";


const API = "https://api.guarderia.saion.mx";

@Injectable({
  providedIn: 'root'
})

export class GeneralService{

  constructor(private http:HttpClient){}

  //---Observable para indicar URL de foto obtenida---
  urlFoto: any;
  private subject = new Subject<any>();
  url: string = API + "/";

  listaUsers() {
    return this.http.get<RespuestaAPI>(API +`/autlan/lista/usuarios`);
  }

  filtropc(razon: any) {
    return this.http.get<RespuestaAPI>(API +`/autlan/filtro/${razon}`);
  }
  filtroConfe(razon: any) {
    return this.http.get<RespuestaAPI>(API +`/autlan/confe/${razon}`);
  }

  listaPC() {
    return this.http.get<RespuestaAPI>(API +`/autlan/lista/pc`);
  }
  nuevoDoc(form: any) {
    let direccion = this.url + "autlan/nuevo/doc";
    return this.http.post<RespuestaAPI>(direccion, form);
  }
  eliminarNoticia(id: any) {
    return this.http.get<RespuestaAPI>(API + `/autlan/eliminar/${id}`);
  }
  solicitudesgeneral(id:any) {
    return this.http.get<RespuestaAPI>(API +`/autlan/lista/general`);
  }

  listaSolicitudes() {
    return this.http.get<RespuestaAPI>(API +`/autlan/lista/solicitudes`);
  }
  listaSolicitudes2() {
    return this.http.get<RespuestaAPI>(API +`/autlan/lista/solicitudes/progreso`);
  }
  listaSolicitudes3() {
    return this.http.get<RespuestaAPI>(API +`/autlan/lista/solicitudes/terminada`);
  }
  estatusSolicitud(estatus: any, id: any) {
    return this.http.get<RespuestaAPI>(API + `/autlan/estado/${estatus}/${id}`);
  }

  solicitudesID(id: any) {
    return this.http.get<RespuestaAPI>(API +`/autlan/solicitudes/${id}`);
  }
  registroPC(form: any) {
    let direccion = this.url + "autlan/civil/nuevo";
    return this.http.post<RespuestaAPI>(direccion, form);
  }

  registroConfe(form: any) {
    let direccion = this.url + "autlan/confe/nuevo";
    return this.http.post<RespuestaAPI>(direccion, form);
  }



  solicitudes(form: any) {
    let direccion = this.url + "autlan/solicitudes";
    return this.http.post<RespuestaAPI>(direccion, form);
  }

  nuevoeEnlace(form: any) {
    let direccion = this.url + "autlan/nuevo/enlace";
    return this.http.post<RespuestaAPI>(direccion, form);
  }

  verEnlaces() {
    return this.http.get<RespuestaAPI>(API +`/autlan/enlaces`);
  }
  verEnlacesPC() {
    return this.http.get<RespuestaAPI>(API +`/autlan/enlaces/pc`);
  }
  buscar(columna: string, valor: any) {
    return this.http.get<RespuestaAPI>(API + `/autlan/consulta/${columna}/${valor}`);
  }
  buscarConfe(columna: string, valor: any) {
    return this.http.get<RespuestaAPI>(API + `/autlan/consulta/confe/${columna}/${valor}`);
  }
  buscarPC(columna: string, valor: any) {
    return this.http.get<RespuestaAPI>(API + `/autlan/pc/${columna}/${valor}`);
  }

  editarDoc(form:any){
    let direccion = this.url + "autlan/actualizar"
    return this.http.put<RespuestaAPI>(direccion, form);
}

  obtener(id: any) {
    return this.http.get<RespuestaAPI>(API +`/autlan/docs/${id}`);
  }
  obtenerA8(id: any, inciso: any) {
    return this.http.get<RespuestaAPI>(API +`/autlan/docs/${id}/${inciso}`);
  }

  obtenerA152018(id: any) {
    return this.http.get<RespuestaAPI>(API +`/autlan/docs/A15/2018/${id}`);
  }

  obtenerA152019(id: any) {
    return this.http.get<RespuestaAPI>(API +`/autlan/docs/A15/2019/${id}`);
  }

  obtenerA152020(id: any) {
    return this.http.get<RespuestaAPI>(API +`/autlan/docs/A15/2020/${id}`);
  }

  obtenerA152021(id: any) {
    return this.http.get<RespuestaAPI>(API +`/autlan/docs/A15/2021/${id}`);
  }

  obtenerA152022(id: any) {
    return this.http.get<RespuestaAPI>(API +`/autlan/docs/A15/2022/${id}`);
  }


  obtenerA82018(id: any, inciso: any, ano:any, carpeta:any) {
    return this.http.get<RespuestaAPI>(API +`/autlan/docs/A8/${id}/${inciso}/${ano}/${carpeta}`);
  }

  obtenerA82019(id: any, inciso: any) {
    return this.http.get<RespuestaAPI>(API +`/autlan/docs/A8/2019/${id}/${inciso}`);
  }

  obtenerA82020(id: any, inciso: any) {
    return this.http.get<RespuestaAPI>(API +`/autlan/docs/A8/2020/${id}/${inciso}`);
  }

  obtenerA82021(id: any, inciso: any) {
    return this.http.get<RespuestaAPI>(API +`/autlan/docs/A8/2021/${id}/${inciso}`);
  }

  obtenerA82022(id: any, inciso: any) {
    return this.http.get<RespuestaAPI>(API +`/autlan/docs/A8/2022/${id}/${inciso}`);
  }
  obtenerSUBSIDIO(id: any, inciso: any) {
    return this.http.get<RespuestaAPI>(API +`/autlan/docs/A8/${id}/${inciso}`);
  }
  obtenerIdentificadorDocumentos(idEmpresa: any){
    let direccion = API + `/preregistro/obtenerIdentificadorDocumentos/${idEmpresa}`
    return this.http.get<RespuestaAPI>(direccion);
  }
  obtenerIdentificadorDocumentosAutlan(idEmpresa: any){
    let direccion = API + `/preregistro/obtenerIdentificadorDocumentos/${idEmpresa}`
    return this.http.get<RespuestaAPI>(direccion);
  }
  eliminarEnlace(form: any){
    const direccion = API + "/autlan/actualizar";
    return this.http.put<RespuestaAPI>(direccion, form);
  }

  limpiarEnlaces(){
    const direccion = API + "/autlan/eliminar";
    return this.http.get<RespuestaAPI>(direccion);
  }

  actualizarNoticia(form: any){
    const direccion = API + "/autlan/noticia/actualizar";
    return this.http.put<RespuestaAPI>(direccion, form);
  }

  actualizarGobierno(form: any){
    const direccion = API + "/autlan/actualizar/gobierno";
    return this.http.put<RespuestaAPI>(direccion, form);
  }
  verGobierno(){
    const direccion = API + "/autlan/gobierno";
    return this.http.get<RespuestaAPI>(direccion);
  }

  nuevaNoticia(form: any) {
    let direccion = this.url + "autlan/noticia/nueva";
    return this.http.post<RespuestaAPI>(direccion, form);
  }
  verNoticias(){
    const direccion = API + "/autlan/noticias";
    return this.http.get<RespuestaAPI>(direccion);
  }

  listadoConfe(){
    const direccion = API + "/autlan/lista/confe";
    return this.http.get<RespuestaAPI>(direccion);
  }
  verPersonal(){
    const direccion = API + "/autlan/personal";
    return this.http.get<RespuestaAPI>(direccion);
  }
  verBanner(){
    const direccion = API + "/autlan/banner";
    return this.http.get<RespuestaAPI>(direccion);
  }
  actualizarBanner(form: any){
    const direccion = API + "/autlan/banner/actualizar";
    return this.http.put<RespuestaAPI>(direccion, form);
  }

  actualizarAreas(form:any){
    const direccion = API + "/autlan/actualizar/tramites";
    return this.http.put<RespuestaAPI>(direccion, form);
  }

  verAreas(){
    const direccion = API + "/autlan/tramites";
    return this.http.get<RespuestaAPI>(direccion);
  }

  verAreas1(area:any, subarea:any){
    let direccion = API + `/autlan/datos/tramites/${area}/${subarea}`;
    return this.http.get<RespuestaAPI>(direccion);
  }
}
