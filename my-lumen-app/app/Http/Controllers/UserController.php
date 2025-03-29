<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use Illuminate\Support\Facades\DB;

class UserController extends Controller
{
    public function login(Request $request)
    {

        try{
            $valildateFields = $this->validate($request, [
                'username' => 'required|string',
                'password' => 'required|string'
            ]);
    
            $user = DB::table('users')->where('username', $request->username)->where('password', $request->password)->first();

        if (!$user) {
            return response()->json([
                'message' => 'Invalid username or password'
            ], 401);
        }

        return response()->json([
            'user' => $user
        ], 200);
    

        } catch(Exception $ex){
            return response()->json([
                $ex
            ]);
        }
        
        
}
}