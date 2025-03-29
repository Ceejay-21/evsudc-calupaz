import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-dashboard',
  standalone: false,
  templateUrl: './dashboard.component.html',
  styleUrl: './dashboard.component.css'
})
export class DashboardComponent {
  totalSales: number = 10250;
  totalOrders: number = 245;
  totalCustomers: number = 1120;
  totalStock: number = 320;

  transactions = [
    { id: 1, customer: 'John Doe', item: 'MacBook Pro', amount: 2500, status: 'Paid' },
    { id: 2, customer: 'Jane Smith', item: 'iPhone 14', amount: 1200, status: 'Pending' },
    { id: 3, customer: 'Mark Johnson', item: 'Samsung TV', amount: 800, status: 'Paid' }
  ];

  constructor(private router: Router) {}

  logout() {
    // Clear authentication data (to be implemented with AuthService)
    console.log('User logged out');
    this.router.navigate(['/login']);
  }
}
