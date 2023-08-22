<?php


namespace App\Http\Controllers;


use Illuminate\Http\Request;
use Illuminate\Support\Facades\Validator;
use Response;
use App\Models\Form;

class FormController extends Controller
{
    public function store(Request $request) {

        // Form validation
        $input = $request->only('name', 'message');

        $validator = Validator::make($input, [
            'name' => 'required',
            'message' => 'required',
        ]);

        if($validator->fails()){
            return response()->json([
                'message' => $validator->errors()
            ], 422);
        }

        // storing form data
        //Form::create();

        // retrieving form data
        // $lastRec = Form::latest()->first();

        $lastRec = ['name' => $request->input('name'), 'message' => $request->input('message')];

        return Response::json(array(
            'formData' => $lastRec,

        ));

       // return back()->with('success', 'Form submitted successfully.');


    }

}
