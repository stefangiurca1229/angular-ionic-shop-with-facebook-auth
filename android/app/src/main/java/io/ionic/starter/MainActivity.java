package io.ionic.starter;

import android.os.Bundle;

import com.getcapacitor.BridgeActivity;
import com.getcapacitor.Plugin;

import java.util.ArrayList;

public class MainActivity extends BridgeActivity {
  @Override
  public void onCreate(Bundle savedInstanceState) {
    super.onCreate(savedInstanceState);
    //facebook login plugin
    registerPlugin(
      com.getcapacitor.community.facebooklogin.FacebookLogin.class
//      jp.rdlabo.capacitor.plugin.facebook.FacebookLogin.class
    );
  }
}
