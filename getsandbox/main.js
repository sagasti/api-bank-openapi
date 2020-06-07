
/*
 * Pines.ApiOma
 *
 * 
 */


var pines_apioma = require("./routes/pines_apioma.js")

/* Route definition styles:
 *
 *	define(path, method, function)
 *	soap(path, soapAction, function)
 *
 */
Sandbox.define("/pines.apioma/api/Operaciones", "POST", pines_apioma.postPines_apiomaApiOperaciones);
Sandbox.define("/pines.apioma/api/Anulaciones", "POST", pines_apioma.postPines_apiomaApiAnulaciones);
Sandbox.define("/pines.apioma/api/ConsultaAgenda", "POST", pines_apioma.postPines_apiomaApiConsultaagenda);
Sandbox.define("/pines.apioma/api/AltaBeneficiario", "POST", pines_apioma.postPines_apiomaApiAltabeneficiario);
Sandbox.define("/pines.apioma/api/ModificarBeneficiario", "POST", pines_apioma.postPines_apiomaApiModificarbeneficiario);
Sandbox.define("/pines.apioma/api/EliminarBeneficiario", "POST", pines_apioma.postPines_apiomaApiEliminarbeneficiario);
Sandbox.define("/pines.apioma/api/GetUsuario", "POST", pines_apioma.postPines_apiomaApiGetusuario);
Sandbox.define("/pines.apioma/api/RecuperarUsuario", "POST", pines_apioma.postPines_apiomaApiRecuperarusuario);
Sandbox.define("/pines.apioma/api/LogIn", "POST", pines_apioma.postPines_apiomaApiLogin);
Sandbox.define("/pines.apioma/api/LogOut", "POST", pines_apioma.postPines_apiomaApiLogout);
Sandbox.define("/pines.apioma/api/CambioPassword", "POST", pines_apioma.postPines_apiomaApiCambiopassword);
Sandbox.define("/pines.apioma/api/CrearUsuario", "POST", pines_apioma.postPines_apiomaApiCrearusuario);
Sandbox.define("/pines.apioma/api/BloquearUsuario", "POST", pines_apioma.postPines_apiomaApiBloquearusuario);
Sandbox.define("/pines.apioma/api/RefreshTokenSession", "POST", pines_apioma.postPines_apiomaApiRefreshtokensession);
Sandbox.define("/pines.apioma/api/ForzarCambioPassword", "POST", pines_apioma.postPines_apiomaApiForzarcambiopassword);
Sandbox.define("/pines.apioma/api/ValidarPassword", "POST", pines_apioma.postPines_apiomaApiValidarpassword);
Sandbox.define("/pines.apioma/api/ValidarUsuario", "POST", pines_apioma.postPines_apiomaApiValidarusuario);
Sandbox.define("/pines.apioma/api/GenerarCompraVenta", "POST", pines_apioma.postPines_apiomaApiGenerarcompraventa);
Sandbox.define("/pines.apioma/api/ComprobanteCompraVenta", "POST", pines_apioma.postPines_apiomaApiComprobantecompraventa);
Sandbox.define("/pines.apioma/api/ConsultaSaldo", "POST", pines_apioma.postPines_apiomaApiConsultasaldo);
Sandbox.define("/pines.apioma/api/ConsultaCuenta", "POST", pines_apioma.postPines_apiomaApiConsultacuenta);
Sandbox.define("/pines.apioma/api/ConsultaCuentaPorCuenta", "POST", pines_apioma.postPines_apiomaApiConsultacuentaporcuenta);
Sandbox.define("/pines.apioma/api/ConsultaSaldoPorCuenta", "POST", pines_apioma.postPines_apiomaApiConsultasaldoporcuenta);
Sandbox.define("/pines.apioma/api/ConsultaMovimientosDiferidos", "POST", pines_apioma.postPines_apiomaApiConsultamovimientosdiferidos);
Sandbox.define("/pines.apioma/api/ConsultaMovimientos", "POST", pines_apioma.postPines_apiomaApiConsultamovimientos);
Sandbox.define("/pines.apioma/api/ModificarAlias", "POST", pines_apioma.postPines_apiomaApiModificaralias);
Sandbox.define("/pines.apioma/api/ConsultaCbuAlias", "POST", pines_apioma.postPines_apiomaApiConsultacbualias);
Sandbox.define("/pines.apioma/api/EliminarCBU", "POST", pines_apioma.postPines_apiomaApiEliminarcbu);
Sandbox.define("/pines.apioma/api/CerrarCuenta", "POST", pines_apioma.postPines_apiomaApiCerrarcuenta);
Sandbox.define("/pines.apioma/RefreshBusinessConfiguration", "POST", pines_apioma.postPines_apiomaRefreshbusinessconfiguration);
Sandbox.define("/pines.apioma/api/{url}", "GET", pines_apioma.getPines_apiomaApi);
Sandbox.define("/pines.apioma/api/{url}", "PUT", pines_apioma.putPines_apiomaApi);
Sandbox.define("/pines.apioma/api/{url}", "POST", pines_apioma.postPines_apiomaApi);
Sandbox.define("/pines.apioma/api/{url}", "DELETE", pines_apioma.deletePines_apiomaApi);
Sandbox.define("/pines.apioma/api/{url}", "OPTIONS", pines_apioma.optionsPines_apiomaApi);
Sandbox.define("/pines.apioma/api/{url}", "HEAD", pines_apioma.headPines_apiomaApi);
Sandbox.define("/pines.apioma/api/{url}", "PATCH", pines_apioma.patchPines_apiomaApi);
Sandbox.define("/pines.apioma/api/OnBoarding", "POST", pines_apioma.postPines_apiomaApiOnboarding);
Sandbox.define("/pines.apioma/api/ConsultaOperacion", "POST", pines_apioma.postPines_apiomaApiConsultaoperacion);
Sandbox.define("/pines.apioma/api/ConsultaPrecio", "POST", pines_apioma.postPines_apiomaApiConsultaprecio);
Sandbox.define("/pines.apioma/api/Conversor", "POST", pines_apioma.postPines_apiomaApiConversor);
Sandbox.define("/pines.apioma/api/ConsultaTasa", "POST", pines_apioma.postPines_apiomaApiConsultatasa);
Sandbox.define("/pines.apioma/api/ConsultaComprobantes", "POST", pines_apioma.postPines_apiomaApiConsultacomprobantes);
Sandbox.define("/pines.apioma/api/GeneracionOTCconMail", "POST", pines_apioma.postPines_apiomaApiGeneracionotcconmail);
Sandbox.define("/pines.apioma/api/GeneracionOTCsinMail", "POST", pines_apioma.postPines_apiomaApiGeneracionotcsinmail);
Sandbox.define("/pines.apioma/api/ValidacionOTC", "POST", pines_apioma.postPines_apiomaApiValidacionotc);
Sandbox.define("/pines.apioma/api/ActivarToken", "POST", pines_apioma.postPines_apiomaApiActivartoken);
Sandbox.define("/pines.apioma/api/ResyncToken", "POST", pines_apioma.postPines_apiomaApiResynctoken);
Sandbox.define("/pines.apioma/api/ValidacionOTP", "POST", pines_apioma.postPines_apiomaApiValidacionotp);
Sandbox.define("/pines.apioma/api/ConsultaPersona", "POST", pines_apioma.postPines_apiomaApiConsultapersona);
Sandbox.define("/pines.apioma/api/ConsultaModPersona", "GET", pines_apioma.getPines_apiomaApiConsultamodpersona);
Sandbox.define("/pines.apioma/api/ModificarPersona", "POST", pines_apioma.postPines_apiomaApiModificarpersona);
Sandbox.define("/pines.apioma/api/CalculoInteres", "POST", pines_apioma.postPines_apiomaApiCalculointeres);
Sandbox.define("/pines.apioma/api/GenerarPlazoFijo", "POST", pines_apioma.postPines_apiomaApiGenerarplazofijo);
Sandbox.define("/pines.apioma/api/ModificarPlazoFijo", "POST", pines_apioma.postPines_apiomaApiModificarplazofijo);
Sandbox.define("/pines.apioma/api/ConsultaPlazoFijo", "POST", pines_apioma.postPines_apiomaApiConsultaplazofijo);
Sandbox.define("/pines.apioma/api/ComprobantePlazoFijo", "POST", pines_apioma.postPines_apiomaApiComprobanteplazofijo);
Sandbox.define("/pines.apioma/api/ConsultaPrestamos", "POST", pines_apioma.postPines_apiomaApiConsultaprestamos);
Sandbox.define("/pines.apioma/api/ConsultaCuotas", "POST", pines_apioma.postPines_apiomaApiConsultacuotas);
Sandbox.define("/pines.apioma/api/GenerarPrestamo", "POST", pines_apioma.postPines_apiomaApiGenerarprestamo);
Sandbox.define("/pines.apioma/api/SimularPrestamo", "POST", pines_apioma.postPines_apiomaApiSimularprestamo);
Sandbox.define("/pines.apioma/api/ComprobantePrestamo", "POST", pines_apioma.postPines_apiomaApiComprobanteprestamo);
Sandbox.define("/pines.apioma/api/GenerarTransaccion", "POST", pines_apioma.postPines_apiomaApiGenerartransaccion);
Sandbox.define("/pines.apioma/api/ComprobanteTransferencia", "POST", pines_apioma.postPines_apiomaApiComprobantetransferencia);