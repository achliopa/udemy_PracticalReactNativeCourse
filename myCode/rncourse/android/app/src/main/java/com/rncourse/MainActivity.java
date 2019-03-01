package com.rncourse;

import com.reactnativenavigation.controllers.SplashActivity;

// public class MainActivity extends SplashActivity {

//     /**
//      * Returns the name of the main component registered from JavaScript.
//      * This is used to schedule rendering of the component.
//      */
//     // @Override
//     // protected String getMainComponentName() {
//     //     return "rncourse";
//     // }
// }


import com.imagepicker.permissions.OnImagePickerPermissionsCallback; // <- add this import
import com.facebook.react.modules.core.PermissionListener; // <- add this import

import android.widget.LinearLayout;
import android.graphics.Color;
import android.widget.TextView;
import android.view.Gravity;
import android.util.TypedValue;

public class MainActivity extends SplashActivity implements OnImagePickerPermissionsCallback {

	private PermissionListener listener; // <- add this attribute

	 @Override
	 public LinearLayout createSplashLayout() {
	 	LinearLayout view = new LinearLayout(this);
	 	TextView textView = new TextView(this);

	 	view.setBackgroundColor(Color.parseColor("#521751"));
	 	view.setGravity(Gravity.CENTER);

	 	textView.setTextColor(Color.parseColor("#fa923f"));
	 	textView.setText("Awesome Places");
	 	textView.setGravity(Gravity.CENTER);
	 	textView.setTextSize(TypedValue.COMPLEX_UNIT_DIP, 40);
	 	view.addView(textView);
	 	return view;
	 }

	 @Override
	  public void setPermissionListener(PermissionListener listener)
	  {
	    this.listener = listener;
	  }

	@Override
	  public void onRequestPermissionsResult(int requestCode, String[] permissions, int[] grantResults)
	  {
	    if (listener != null)
	    {
	      listener.onRequestPermissionsResult(requestCode, permissions, grantResults);
	    }
	    super.onRequestPermissionsResult(requestCode, permissions, grantResults);
	  }

}